import React, { useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './productComponent';

import axios from 'axios';
import { setProducts } from './actions/ProductActions';
function ProductListing() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(setProducts(response.data));
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    console.log("Products :", products);
    return (
        <div className="ui grid container">
        <ProductComponent />
      </div>
    );
};

export default ProductListing;

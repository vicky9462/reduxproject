import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
import './App.css'
function App() {
  return (
     
    <Routes>
     <Route path='/' element={<ProductListing/>}/>
<Route path='/product/:productid' element={<ProductDetail/>}/>
     
</Routes>
   
  )
}

export default App

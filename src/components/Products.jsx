import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () =>{
        let url = await fetch('https://dummyjson.com/products');
        let data = await url.json()
        // console.log(data);
        setProducts(data.products);
    }
    useEffect(() => {
      getProducts()
    }, [])
    
  return (

    <>
    {/* {products.map((product =>{
        return <div key={product.id} classNameNameclassName="productContainer border">
            <div classNameNameclassName="products">
                <h4>Product id: {product.id}</h4>
                <h5>Product name: {product.title}</h5>
                <p>Product Description: {product.body}</p>
            </div>
        </div>
    }))} */}

{products.map((product =>{
        return<div className="card">
        <div className="card-body">
          <h5 className="card-title">Product Name: {product.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Price: {product.price}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Rating: {product.rating}</h6>
          <p className="card-text">Description: {product.description}</p>
          {/* <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    }))}
  
  
    
    
    </>
    
  )
}

export default Products

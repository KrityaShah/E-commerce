import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () =>{
        let url = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await url.json()
        // console.log(data);
        setProducts(data);
    }
    useEffect(() => {
      getProducts()
    }, [])
    
  return (

    <>
    {products.map((product =>{
        return <div key={product.id} className="productContainer border">
            <div className="products">
                <h4>Product id: {product.id}</h4>
                <h5>Product name: {product.title}</h5>
                <p>Product Description: {product.body}</p>
            </div>
        </div>
    }))}
  
    
    
    
    </>
    
  )
}

export default Products

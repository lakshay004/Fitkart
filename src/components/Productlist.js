import React from 'react'
import Products from './Products'

export default function Productlist({TotalProduct}) {
    const productElements = TotalProduct.map(product => {
        return <Products key={product.id} {...product}/>
    })
    return (
        <div className='Products-grid'>
            {productElements}
        </div>
    )
}

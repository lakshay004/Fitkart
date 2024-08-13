import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Products(props) {
    const { handleaddtocart } = useContext(MyContext)

    const {
        id,
        name, 
        quantity, 
        price 
    } = props

    return (
        <div className='Products-Container'>
            <div className='Products-details'>
                <label className='Product-name'>
                    Name: {name}
                </label>
                <br />
                <label className='Product-quantity'>
                    Quantity: {quantity}
                </label>
                <br />
                <label className='Product-price'>
                    Price: {price}
                </label>
                <br />
                <div className='Add_to_cart-btn-container'>
                    <button className='btn btn--primary' onClick={() => handleaddtocart(id)}>
                        Add To Cart
                    </button>
                </div>
                <div className='Add_to_Wishlist-btn-container'>
                    <button className='btn btn--info'>
                        WishList &#10084;&#65039;
                    </button>
                </div>
            </div>
        </div>
    )
}

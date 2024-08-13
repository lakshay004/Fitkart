import React, { useContext } from 'react'
import icon from '../images/firkart-icon.png'
import { MyContext } from './App'

export default function NavBar() {
    const { product_selected_details } = useContext(MyContext)

    return (
        <div>
            <div className='NavBar-container'>
                <div className='logo'>
                    {/* <img src={icon} alt={icon} /> */}
                </div>
                <div className='searchbar-container'>
                    <input 
                        className='searhbar'
                        value='Search'
                    />
                    <button className='Search_btn'>
                        &#x1F50D;
                    </button>
                </div>
                <div className='login/Sign_up-container'>
                    <button className='login/Sign_up-container'>
                        Login/Sign Up
                    </button>
                </div>
                <div className='Cart-container'>
                    <p 
                    className='Cart'
                    value='U+1F62'
                    >
                        {product_selected_details ? (product_selected_details) : ('')}
                    </p>
                </div>
                <br />
                <div className='Wishlist_btn-container'>
                    <button className='Wishlist_button'>
                        &#10084;&#65039;
                    </button>
                </div>
            </div>
        </div>
    )
}

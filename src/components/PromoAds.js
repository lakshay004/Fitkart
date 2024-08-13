import React from 'react'
import promo1 from '../images/promo1.png'

export default function PromoAds() {
    return (
        <div className='PromoAds-container'>
            <div className='promo-images'>
                <img src={promo1} alt={promo1} />
            </div>
        </div>
    )
}

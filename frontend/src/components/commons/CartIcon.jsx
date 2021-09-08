import React from 'react'
import shoppingBag from '../../assets/shopping-bag.png'

function CartIcon({cartsize}) {
    return (
        <div>
            <img alt='shopping-bag' src={shoppingBag} style={{ width: '30px'}}></img>
            <span style={{marginLeft:'-10px', backgroundColor:'gray', color:'white', borderRadius:'10px', paddingRight:'4px'}}>{cartsize}</span>
        </div>
    )
}

export default CartIcon

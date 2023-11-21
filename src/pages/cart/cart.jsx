import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { PRODUCTS } from "../../components/products";
import {CartItem} from './cart-item';
import { useSelector } from "react-redux/es/exports";

export const Cart = ()=>{
    const cartDetail = useSelector((state)=> state.cart.cart)
    return (
        <div className="cart">
            <div>
                <h1>
                    Cart Items
                </h1>
            </div>
            <div className="cartItems">
            {Object.values(cartDetail).map(item =>{
            return <CartItem key={item.productName} {...item}/>
           })}
            </div>

            <div>
                <button className="addToCartBttn" onClick={()=>{

                    window.location.reload()

                }}>remove all</button>
            </div>
            </div>
    )
}
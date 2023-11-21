import React from "react";
import {useParams} from 'react-router-dom'
export const CartItem = (props) =>{ 
    const { productImage ,price } = props;

const {productName} = useParams()

    return(
        <div className="carItem">
            <img src={productImage}/>
            <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            </div>
        </div>
    )
}
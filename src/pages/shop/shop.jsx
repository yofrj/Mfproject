import React from "react";
import {PRODUCTS} from '../../components/products'
import {Product} from './product'
import "./shop.css";

export const Shop = ()=>{
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1> PedroTech shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product)=>(
                    <Product data={product} />

                ))}
            </div>
        </div>
    )
}

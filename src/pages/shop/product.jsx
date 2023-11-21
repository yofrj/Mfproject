import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/redusers/action";
import { useNavigate } from "react-router-dom";

export const Product = (props)=>{
    const { productName , productImage ,price } = props.data;
    const dispatch = useDispatch()
const navigate = useNavigate()
const localuser= localStorage.getItem("user")


    return( <div className="product">
        <img src={productImage}/>
        <div className="description">
            <p>
            <b> {productName}</b>
            </p>
            <p>
            <b> {price}$</b>
            </p>
            <button className="addToCartBttn" onClick={()=>{
if(localuser){
   dispatch(addToCart(props.data)) 
}
else{
    alert('pls login first')
}


            }}>
            
                
                Add To Cart 
            </button>

        </div>

    </div>
    );
};

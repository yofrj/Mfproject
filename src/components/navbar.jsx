import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import './nabar.css';
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export const Navbar = ()=>{
const navigate = useNavigate()
    const cartDetail = useSelector((state)=> state.cart.cart);
    const usernav= JSON.parse(localStorage.getItem("user"))  
    useEffect(()=>{

       console.log(usernav)
       },[])
    


    return(
        <div className="navbar ">
            <div className="links ">{(usernav)?<button onClick={()=>{
                localStorage.removeItem('user')
                navigate('/')
                window.location.reload()
            }}>log out</button> : <Link to='/login'>login</Link>}<Link to="/">Shop {Object.keys(cartDetail).length>0 && Object.keys(cartDetail).length}</Link> <Link to="/cart"><ShoppingCart size={32}/></Link> </div>
        </div>
    )



}
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addUsers } from "../redux/redusers/action";
import { useNavigate } from "react-router-dom";
export default function Login(){

const [username,setUsername] = useState();
const [pass,setPass] = useState()
const userDetail = localStorage.getItem('user')
const navigate = useNavigate()

useEffect(()=>{
    if(userDetail) {navigate('/')}
    },[])
    const handleSubmit = ()=>{
    if((pass!="" && pass!=undefined) && (username!="" && username!=undefined) ){
    
    localStorage.setItem("user",JSON.stringify({username,pass}))
    window.location.reload()
    navigate('/')
    
    }
    else{
    
    alert("pls fill compeletely")
    
    
    }
    
    
    }


return (


<div>
    <p>login </p>

    <p> username</p>
    <input placeholder="username" onKeyUp={(e)=>{
        setUsername(e.target.value)
    }}/>
     <p> password</p>
    <input placeholder="password" onKeyUp={(e)=>{
        setPass(e.target.value)
    }}/>
    <button onClick={()=>{
        handleSubmit()
    }}>submit</button>
</div>


)



    }

import React, {useState} from 'react';

export default function Log() {
    let[buttonCaption, setButtonCaption]=useState("LOGIN");
    let[text, setText]=useState("Logout");
    let[isLoggedIn, setIsLoggedIn]=useState(false);


    ///----------------------------------------------------main rendering
  return (
    <div>
    <p>You are {text}</p>
    <button onClick={()=>{
        if(isLoggedIn){
            setButtonCaption("LOGIN")
            setText("Logout");
        }else{
            setButtonCaption("LOGOUT")
            setText("Login");
        }
        setIsLoggedIn(!isLoggedIn);
    }}>{buttonCaption}</button>
</div>
  )
}

import React from "react";

export default function Footer(props){
    return (<div>
        <hr color="blue" size="6px"></hr>
        Copyright@ {props.cname} <br/>
        <a href="https://www.capgemini.com/">About Us</a><br/>
        <a href="https://www.capgemini.com/careers/">Careeres</a><br/>
        <a href="https://www.capgemini.com/contact-us/">Contact Us</a><br/>
    </div>);
} 
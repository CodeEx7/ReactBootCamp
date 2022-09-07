import React from "react";
import Header from "./component/Header"
import Footer from "./component/Footer"
import GreetMe from "./component/GreetMe";

var App=(props)=>{
  return (<div className="App">
          <h2>This is Developed by {props.fname}</h2>
          <Header country="India" compName="Capgemini"/>
          <p>This is main section</p>
          <GreetMe/>
          <Footer cname="Capgemini"/>
    </div>);
};


export default App;
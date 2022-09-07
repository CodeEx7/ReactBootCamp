import React from "react";
import Login from "./Login";
import Log from "./Log";

class Header extends React.Component{

render(){
    var h2Style={
        backgroundColor: "Cyan",
        border: "2px solid black"
    }
    return (<div>
        <h2 style={h2Style}><marquee>welcome to: {this.props.compName} - Country: {this.props.country}</marquee></h2>
        <Login/>
        <Log/>
        <hr color="Yellow" size="5px"/>
    </div>);
}
};

export default Header;
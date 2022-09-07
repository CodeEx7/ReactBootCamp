import React, { Component } from 'react';
import LifeCycleA from './LifeCycleA';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            "buttonCaption":"LOGIN",
            text:"logout",
            isLoggedIn:false
        }
    }

    //------------------------------------main renderering
    render() {
        return (
            <div>
                <p>You are {this.state.buttonCaption}</p>
                <button onClick={()=>{
                    if(this.state.isLoggedIn){
                        this.setState({
                            buttonCaption:"LOGIN",
                            text:"logout"
                        });
                    }else{
                        this.setState({
                            buttonCaption:"LOGOUT",
                            text:"login"
                        });
                    }
                    this.setState({isLoggedIn:!this.state.isLoggedIn});
                }}>{this.state.buttonCaption}</button>
                <LifeCycleA fname="Brij"/>
            </div>
        );
    }
}

export default Login;


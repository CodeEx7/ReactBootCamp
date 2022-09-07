import React, { Component } from 'react';

class CGForm1 extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:({"fn":"firstName", "ln":"lastName"}),
            items:[],
            name:"Brij"
        }
    }
    //------------------------------------------------
    handleChange=(event)=>{
        let {name, value}=event.target;
        if(name==='fn'){
            this.setState((prevState)=>{
                return ({fullName:{...prevState.fullName, fn:value}});
            });
          }else{
            this.setState((prevState)=>{
                return ({fullName:{...prevState.fullName, ln:value}});
            });
          }
    };
    //------------------------------------------------------------
    render() {
        return (
            <div><h4>CGForm1-------------------</h4><br/>
            FirstName:<input type="text" name="fn" onChange={this.handleChange} value={this.state.fullName.fn}/><br/>
            LastName:<input type="text" name="ln" onChange={this.handleChange} value={this.state.fullName.ln}/><br/>

            Firstname={this.state.fullName.fn}-------LatName={this.state.fullName.ln};
    </div>
        );
    }
}

export default CGForm1;

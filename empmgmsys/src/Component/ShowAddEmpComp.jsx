import axios from 'axios';
import React, { Component } from 'react'

export default class ShowAddEmpComp extends Component {
    constructor(props){
        super(props);
        this.state={
            empObj:{"empId":0, "empName":"", "empSal":0.0, "isMarried":false},
        }
    }
    //=----------------------------------
    handleChange=(event)=>{
        const {name, type, value, checked}=event.target;
        if(type==="text"){
            this.setState({empObj:{...this.state.empObj,[name]:value}})
            // this.setState((prevState)=>{
            //     return ({empObj:{...prevState.empObj,[name]:value}});
            // })
        }else{
            this.setState((prevState)=>{
                return ({empObj:{...prevState.empObj,[name]:checked}});
            })
        }
    }
    //=----------------------------------
    handleSubmit=()=>{
        
        // alert(this.state.empObj.id+"--"+this.state.empObj.empId + this.state.empObj.empName + this.state.empObj.empSal +  this.state.empObj.isMarried);
        axios.post("http://localhost:3003/emps", this.state.empObj)
        .then((empRes)=>{
            console.log("Date inserted Successfully");
        })
        .catch((errRes)=>{
            console.log("We are getting error on the time of inserting");
        });
    }
    //-----------------------------------

  render() {
    return (
      <div>Add Emp Info Here..........:
        <form onSubmit={this.handleSubmit}>
            EmpID:<input type="text" name="empId" required onChange={this.handleChange}/><br/>
            EmpName:<input type="text" name="empName" required onChange={this.handleChange}/><br/>
            EmpSal:<input type="text" name="empSal" onChange={this.handleChange}/><br/>
            isMarried:<input type="checkbox" name="isMarried" checked={this.state.empObj.isMarried} onChange={this.handleChange}/><br/>
            <input type="submit" value="Add Emp"/>
            
        </form>
      </div>
    )
  }
}

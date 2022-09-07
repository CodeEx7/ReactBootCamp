import React, { Component } from 'react'
import CgForm from './CgForm';
import CGForm1 from './CGForm1';

export default class GreetMe extends Component {
    constructor(props){
    super(props);
    this.state={
        msg: "Happy New Year",
        Year: "2022",
        count: 0,
        cityList:["Mumbai", "Delhi", "Hyderabad", "Pune"],
        empList:[
            {"empId":444, "empName":"Brij", "empSal":900.0},
            {"empId":555, "empName":"Deepak", "empSal":900.0},
            {"empId":777, "empName":"Wolfy", "empSal":900.0}],
    }
    this.incCount=this.incCount.bind(this); //binding of the count
}
//incount function, for inbound function we have to bind it in the main constructor
incCount(){
    this.setState({count:this.state.count+1});
}

//decCount function --Arrow function bound automatically with this in counstrocter
decCount=()=>{
    this.setState({count:this.state.count-1})
}


///---------------------------------------------
  render() {
    var newCityList=this.state.cityList
    .map((city,cityIndex)=>{
        return (<li key={cityIndex}>{city}</li>)
    });

    var newEmpList=this.state.empList
    .map((emp, empIndex)=>{
        return (<tr key={empIndex}>
                    <td>{emp.empId}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empSal}</td>
        </tr>)
    });
    //-------------------------------main return or redering are done here
    return (
      <div>
        <p>{this.state.msg}  -   Year:{this.state.Year}</p>
        <button onClick={this.incCount}>IncrementCounter</button>
        <b>-----={this.state.count}=-----</b>
        <button onClick={this.decCount}>Decrement Counter</button>
        <p>Capgemini Locations:</p>
        {newCityList}<br/>
        <p>Emp List</p>
        <table border="1">
            <thead>
                <tr>
                    <th>EMPID</th>
                    <th>EMPNAME</th>
                    <th>EMPSAL</th>
                </tr>
            </thead>
            <tbody>
                {newEmpList}
            </tbody>

        </table>
        <CgForm/>
        {/* <CGForm1/> */}
      </div>
    )
  }
}



import React, { Component } from 'react';

class Mainpage extends Component {
    constructor(props){
        super(props);
        this.state={
            empList:[
                {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
                {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
                {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
                {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
                {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
                {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
                {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
                {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
                {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'}
            ]
        };
    }
    
    
    sortById=()=>{
        var empID=this.state.empList.sort(function(a,b){
                return a.empId - b.empId;
        });
        this.setState({empList:empID});
    }

    SortByName=()=>{
        var empNAME=this.state.empList.sort(function(a,b){
            return a.empName.localeCompare(b.empName);
        });
        this.setState({empList:empNAME});
    }

    SortByDep=()=>{
        var empDEP=this.state.empList.sort(function(a,b){
            return a.empDep.localeCompare(b.empDep);
        });
        this.setState({empList:empDEP});
    }

    SortBySal=()=>{
        var empSAL=this.state.empList.sort(function(a,b){
            return a.empSal - b.empSal;
        });
        this.setState({empList:empSAL});
    }

    SortByDate=()=>{
        var empDATE=this.state.empList.sort(function(a,b){
            return (a.empDate)-(b.empDate);
        });
        this.setState({empList:empDATE});
    }

    render() {
        var newempList=this.state.empList
        .map((emp,empIndex)=>{
            return(
                <tr key={empIndex}>
                    <td>{emp.empId}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empSal}</td>
                    <td>{emp.empDep}</td>
                    <td>{emp.empjoiningdate}</td>
                
            </tr>)
        });


        //main retrning---------------------------------
        return (
            <div>
                <h1>This is main part of the solution</h1>
                <p><b>This is the Emp List</b></p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th><a href="javascript:void(0)" onClick={this.sortById}>EMPID</a></th>
                            <th><a href="javascript:void(0)" onClick={this.SortByName}>EmpName</a></th>
                            <th><a href="javascript:void(0)" onClick={this.SortBySal}>EmpSal</a></th>
                            <th><a href="javascript:void(0)" onClick={this.SortByDep}>EmpDep</a></th>
                            <th><a href="javascript:void(0)" onClick={this.SortByDate}>EmpJoiningDate</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {newempList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Mainpage;
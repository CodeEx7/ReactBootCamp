import React, { Component } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";

class ShowAllEmpComp extends Component {
    constructor(props){
        super(props);
        this.state={
            AllEmpInfo:[],
        }
    }
    //------------------using Delete Button------------
    delEmp=(empId)=>{
        //alert("U need to delete record for "+empId);
        axios.delete("http://localhost:3003/emps",empId)
        .then((empRes)=>{console.log("Emp got deleted");})
        .catch((empRes)=>{console.log("Error occured with delete");});
    }
    //-----------------------
    componentDidMount(){
        //from axios we get promis
        var prom=axios.get("http://localhost:3003/emps");
        prom
        .then((empRes)=>{console.log(empRes.data);
            this.setState({AllEmpInfo:empRes.data});
        })
        .catch((empError)=>{
            console.log("Error while reading emp.json file");
        });
    }
    //main render here
    render() {
        var newEmpList=this.state.AllEmpInfo
        .map((emp,empIndex)=>{
            return (<tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.empId}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empSal}</td>
                    <td>{(emp.isMarried)?"Married":"NotMarried"}</td>
                    <td><button onClick={()=>{this.delEmp(emp.id)}}>DELETE</button></td>
                    <td><Link to={`/ShowUpdateEmpPage/${emp.id}`}>UPDATE</Link></td>
            </tr>)
        });


        return (
            <div>All Emp Info are:
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EMPID</th>
                            <th>NAME</th>
                            <th>SALARY</th>
                            <th>MARRIED</th>
                            <th>DELETE?</th>
                            <th>UPDATE?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newEmpList}
                    </tbody>
                </table>                
            </div>
        );
    }
}

export default ShowAllEmpComp;
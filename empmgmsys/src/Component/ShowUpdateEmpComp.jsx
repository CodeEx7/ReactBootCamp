import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ShowUpdateEmpComp() {

  let {eid}=useParams();
  let [emp, setEmp]=useState({empId:0, empName:"", empSal:0.0, isMarried:false});
  //-----------------------------------------------
  useEffect(()=>{
    axios.get(`http://localhost:3003/emps/${eid}`)
    .then((empRes)=>{
      setEmp(empRes.data);
    })
    .catch((emperr)=>{
      console.log("Error while fetching emp details by Emp Id");
    });
  },[])

  let handleUpdate=()=>{}
  //-------------------------------------
  let handleUpdateChange=()=>{}
  //-------------------------------------
  return (
    <div> Update your Emp Details here:....................
      <form onSubmit={handleUpdate}>
            EmpID:<input type="text" name="empId"  readOnly value={emp.empId} onChange={handleUpdateChange}/><br/>
            EmpName:<input type="text" name="empName" required value={emp.empName} onChange={handleUpdateChange}/><br/>
            EmpSal:<input type="text" name="empSal" value={emp.empSal} onChange={handleUpdateChange}/><br/>
            isMarried:<input type="checkbox" name="isMarried" checked={emp.isMarried} value={emp.isMarried} onChange={handleUpdateChange}/><br/>
            <input type="submit" value="Update Emp"/>
            
        </form>

    </div>
  )
}

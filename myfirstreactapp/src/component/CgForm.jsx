import React, {useState, useEffect} from 'react'

export default function CgForm() {

    let [fullName, setFullName]=useState({"fn":"firstName", "ln":"lastName"});
    let [items, setItems]=useState([]);
    // let [name,setName]=useState("Brij");
    let [count,setCount]=useState(5);
    console.log("CGFORM starts here!!!");

    //------------LifeCycle hook------------------
    useEffect(()=>{
      console.log("CGForm useState Executed");
    },[count]);

    //-------------------------------
    let handleChange=(event)=>{
        let {name, value}=event.target;
        if(name==='fn'){
          setFullName({...fullName,"fn":value});
        }else{
          setFullName({...fullName,"ln":value});
        }
    };
    //---------------------------------
    let genearteRandomNumber=()=>{
        setItems([...items,Math.random()]);
    };
    //----------------------------------

  return (
    <div><h4>CGForm-------------------</h4><br/>
    FirstName:<input type="text" name="fn" onChange={handleChange} value={fullName.fn}/><br/>
    LastName:<input type="text" name="ln" onChange={handleChange} value={fullName.ln}/><br/>

    Firstname={fullName.fn}-------LatName={fullName.ln}
    <br/>
    <button onClick={genearteRandomNumber}>Generate random number</button>
        <ul>
            {items.map((num,Index)=>{
                return <li key={Index}>{num}</li>
            })}
        </ul>
    <br/>
    <button onClick={()=>{setCount(count+5)}}>incCount</button>
        
    </div>
  )
}

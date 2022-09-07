import React, { Component } from 'react'

export default class LifeCycleA extends Component
 {
    //--------------------
    constructor(props)
    {
        super(props);
        this.state= {
            count:1,
            fname:"samir"            
        }
        console.log("LifeCycleA constructor was executed");

    }
    //----------------------
    static getDerivedStateFromProps(myprops,mystate)
    {
        console.log(`LifeCycleA getDerivedStateFromProps 
        was executed - 
        myprops.fname=${myprops.fname}  - mystate.fname =
        ${mystate.fname}- mystate.count=${mystate.count}`);
        return null;

    }

    //-------------------------
    shouldComponentUpdate()
    {
        console.log(`LifeCycleA shouldComponentUpdate was executed`)
        return true
    }
    //----------------------
  render() {
    console.log(`LifeCycleA render was executed`)
    return (
      <div><p>LifeCycleA......</p>
      <p>Count={this.state.count}</p>
          <p>FirstName passed through props: {this.props.fname}</p>
          <p>FirstName  declared  in state : {this.state.fname}</p>
          <button onClick={()=>
          {this.setState({count:this.state.count+2})}}
          >CClick To Change Counter Calue</button>
          <br/>
          <button onClick={()=>{this.setState({fname:"sri"})}}>
              Change  state fname to sri</button>
      </div>
    )
  }
  //-----------------------------

  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log(`LifeCycleA getSnapshotBeforeUpdate 
    was executed - 
    prevProps.fname=${prevProps.fname}  - prevState.fname =
    ${prevState.fname}- prevState.count=${prevState.count}`);

  }
  //---------------------
  componentDidMount()
  {
    console.log(`LifeCycleA componentDidMount was executed`)
 }

 componentDidUpdate()
  {
    console.log(`LifeCycleA componentDidUpdate was executed`)
 }

}

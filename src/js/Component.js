/*import React from 'react'
import './Component.css'
const Component = () => {
    const name="Vinnu"
  return (
    <div>
        <p>{name}</p>
        <p>{[10,20,30]}</p>
    </div>
  )
}
export default Component;*/

/*
import React from 'react'
import './Component.css'
const Component = () => {
    function func1()
    {
        const arr=["Manju","Vinnu","Anu"]
        const name=Math.floor(Math.random()*3)
        return arr[name]

    }
    const handleChange = () => {
      console.log("Thanks")
    }

    return (
    <div>
        <p>Name:{func1()}</p>
        <button onClick={handleChange()}>Click here</button>
    </div>
  )
}
export default Component;

*/


import React from 'react';
class Component extends React.Component

{
  constructor(props)
  {
    super(props)
    this.state={count:0}
  }
  increment =() => {
    this.setState((prevState)=>({
      count:prevState.count+1
    }))}
    decrement=() => {
      this.setState((prevState)=>({
        count:prevState.count-1
      }))}
    render(){
      return (
        <div>
          <p>Count:{this.state.count}</p>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      )
    }
}
export default Component;
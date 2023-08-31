// rfce to create this function
// react class export component - rce
import React, { Component } from 'react'

export default class Aboutclass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:this.props.name,
         work:this.props.work,
         count:0,
         username: ""
      }
    }

  clickEvent(){
    console.log("Button.")
    this.setState({
      name: "About class component",
      count:this.state.count+1
    })
  }
  mouseHoverEvent(){
    console.log("Hello!")
  }
  inputChange(e){
    console.log(e)
    this.setState({
      username:e.target.value
    })
  }
  render() {
    //this.state.name = "About class component"
    return (
      <div>about
      <br></br>
      <b>Name: {this.props.name}</b><br></br>
      <b>Work: {this.props.work}</b><br></br> 
      <b>Username: {this.state.username}</b><br></br>
      <input onChange={(e)=>this.inputChange(e)}></input>
      
      <button onClick={()=>this.clickEvent()}>Click</button><br></br>
      <button onTouchOver={()=>this.mouseHoverEvent()} onClick={()=>this.onClick(this.clickEvent())}>Hover</button>
      <h1>Count: {this.state.count}</h1>
      </div>
    )
  }
}

//export default Aboutclass
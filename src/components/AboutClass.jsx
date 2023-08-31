// rfce to create this function
// react class export component - rce
import React, { Component } from 'react'

export default class Aboutclass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:this.props.name,
         work:this.props.work,
      }
    }


  render() {
    //this.state.name = "About class component"
    return (
      <div>about
      <br></br>
      <b>Name: {this.props.name}</b><br></br>
      <b>Work: {this.props.work}</b><br></br>
      </div>
    )
  }
}

//export default Aboutclass
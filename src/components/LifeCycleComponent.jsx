import React, { Component } from 'react'

export class LifeCycleComponent extends Component {

    constructor(props){
        console.log("constructor")
        super(props)
        this.state= {
            name:""
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            name:props.name
        }
    }
    componentDidMount(){
        console.log('complete mount')
    }
    shouldComponentUpdate(){
        console.log("Preveious state and props")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        console.log("hi")
        return null
    }
    componentDidUpdate(){
        console.log("Component did update")
    }
    clickEvent(){
        console.log('click event')
        this.setState({
            name:""
        })
    }

  render() {
    console.log("Render is updated")
    return (
        <><></><div>LifeCycleComponent</div><button onClick={() => this.clickEvent()}>update</button></>
    )
  }
}

export default LifeCycleComponent
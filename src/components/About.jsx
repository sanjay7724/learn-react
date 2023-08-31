import React, {useState} from 'react'

function About(props) {
  const [name,setName] = useState("About function")

  function clickEvent(){
    setName("Click in About Function")
    console.log("Click event works...")
  }
  function changeEvent(e){
    setName(e.target.value)
  }
  
  return (
    <div>About:
      <b>Name: {props.name}</b><br></br>
      <b>Work: {props.work}</b><br></br>
      <b>UserName: {name}</b><br></br>
      
      <button onClick={(e)=>changeEvent(e)}>Click</button><br></br>
    </div>
  )
}

export default About
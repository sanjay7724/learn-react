import React from 'react'

function About(props) {
  return (
    <div>About:
      <b>Name: {props.name}</b>
      <b>Work: {props.work}</b>
    </div>
  )
}

export default About
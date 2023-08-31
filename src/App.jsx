
import './App.css'
import {Home} from './components/Home'
import HomeClass from './components/HomeClass'
import About  from './components/About'
import Aboutclass from './components/AboutClass'
function App() {

  return (
    <>
       <Aboutclass name="app component" work="parent component"/><br></br>
       <About name="Sanjay" work="Batman"/> 
    </>
    
  )
}

export default App

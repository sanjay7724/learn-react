
import './App.css'
import {Home} from './components/Home'
import HomeClass from './components/HomeClass'
import About  from './components/About'
import Aboutclass from './components/AboutClass'
import LifeCycleComponent from './components/LifeCycleComponent'
function App() {

  return (
    <>
       <Aboutclass name="app component" work="parent component"/><br></br>
       <About name="Sanjay" work="Batman"/> 
       <LifeCycleComponent name="Mount lifecycle"/>
    </>
    
  )
}

export default App

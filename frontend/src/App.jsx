import { useState } from 'react' 
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Login from './components/Login'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {

  
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('dark')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setText('light')
    }else{
      setMode('light')
      setText('dark')
    }
  }

  return (
    <>
    <Router>
     <Navbar mode={mode} text={text} toggleMode={toggleMode}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App

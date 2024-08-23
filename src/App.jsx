import { useState } from 'react' 
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Home from './components/Home'


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
      <Navbar mode={mode} text={text} toggleMode={toggleMode}/>
      <Products/>
      <Home/>
    </>
  )
}

export default App

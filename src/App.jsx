import { useState } from 'react' 
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <><Navbar/> <Home/></>,
    },
    {
      path : "/products",
      element:  <><Navbar/><Products/></>,
    },
  ])
  
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
     
      <RouterProvider router={router} />
    </>
  )
}

export default App

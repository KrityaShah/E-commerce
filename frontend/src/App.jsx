import { useState } from 'react' 
import Navbar from "./components/Navbar" // Navbar1 for other pages
import Navbar2 from "./components/Navbar2" // Navbar2 for ClientHomepage
import Products from './components/Products'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Logout from './components/Logout'
import ClientHomepage from './components/ClientHomepage'
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

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setText('light')
    } else {
      setMode('light')
      setText('dark')
    }
  }

  return (
    <>
      <Router>
        <Routes>
        
          <Route path='/' element={<><Navbar mode={mode} text={text} toggleMode={toggleMode} /><Home /></>} />
          <Route path='/products' element={<><Navbar mode={mode} text={text} toggleMode={toggleMode} /><Products /></>} />
          <Route path='/login' element={<><Navbar mode={mode} text={text} toggleMode={toggleMode} /><Login /></>} />
          <Route path='/signup' element={<><Navbar mode={mode} text={text} toggleMode={toggleMode} /><Signup /></>} />
          <Route path='/logout' element={<><Logout /></>} />

         
          <Route path='/clienthomepage' element={<ClientHomepage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

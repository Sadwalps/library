
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import Footers from './Components/Footers'

function App() {
  

  return (
    <>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Footers/>
    </>
  )
}

export default App

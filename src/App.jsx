
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import Footers from './Components/Footers'
import LibMore from './Pages/LibMore'
function App() {
  

  return (
    <>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/books' element={<LibMore/>}/>
     </Routes>
     <Footers/>
    </>
  )
}

export default App

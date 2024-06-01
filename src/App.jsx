import Login from './Components/LOGIN/Auth'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

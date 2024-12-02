import React from 'react'
import BackgroundWithText from './BackImg'
import { Routes , Route} from "react-router-dom"
import Home from './pages/home'

const MainPage=()=>{
  return (
    <>
     <BackgroundWithText/>
    </>
  )
}

const App = () => {
  return (
    <div>

     
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App

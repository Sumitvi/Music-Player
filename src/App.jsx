import React from 'react'
import BackgroundWithText from './BackImg'
import { Routes , BrowserRouter , Route} from "react-router-dom"
import Home from './pages/home'
import Feed from './pages/Feed'
import Treding from './pages/Treding'
import Player from './pages/Player'
import Favourite from './pages/Favourite'
import Library from './pages/Library'
import SideBar from './component/SideBar'

const MainPage=()=>{
  return (
    <>
    
     <BackgroundWithText/>
    </>
  )
}


const App = () => {
  return (
    <div className='flex flex-1  '>

        <BrowserRouter>
          <SideBar/>
     
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
        <Route path='/trending' element={<Treding/>}></Route>
        <Route path='/player' element={<Player/>}></Route>
        <Route path='/favourite' element={<Favourite/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
      </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import MatchDetail from './components/MatchDetail'
import NavBar from './components/NavBar'
import PointsTable from './components/PointsTable'
import News from './components/News'
import Player from './components/Player'
import Stats from './components/Stats'


function App() {

  return (
    <Routes>
        <Route to="/" element={<NavBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/pointsTable' element={<PointsTable/>}/>
            <Route path='/matchdetail/:id' element={<MatchDetail/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/stats' element={<Stats/>}/>
        </Route>

        
    </Routes>
  )

}

export default App

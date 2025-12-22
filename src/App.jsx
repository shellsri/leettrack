import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Problems from './pages/Problems.jsx'
import Analytics from './pages/Analytics.jsx'
const App = () => {
  const [problems, setproblems] = useState([])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path ='/dashboard' element={<Dashboard problems = {problems}/>}></Route>
        <Route path ='/problems' element={<Problems problems={problems} setproblems={setproblems}/>}></Route>
        <Route path ='/analytics' element={<Analytics/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App

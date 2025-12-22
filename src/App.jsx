import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Problems from './pages/Problems.jsx'
import Analytics from './pages/Analytics.jsx'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path ='/dashboard' element={<Dashboard/>}></Route>
        <Route path ='/problems' element={<Problems/>}></Route>
        <Route path ='/analytics' element={<Analytics/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App

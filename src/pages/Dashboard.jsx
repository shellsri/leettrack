import React from 'react'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>LeetTrack Dashboard</h1>
      <div className='stats-grid'>
        <Card label="Total Solved" value={120}/>
        <Card label="Easy" value={60}/>
        <Card label="Medium" value={40}/>
        <Card label="Hard" value={20}/>
     </div>
    </div>

  )
}

export default Dashboard


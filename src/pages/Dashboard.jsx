import React from 'react'
import Card from '../components/Card'

const Dashboard = ({problems}) => {
   if (!Array.isArray(problems)) {
    return <p>Loading dashboard...</p>;
  }
  const total = problems.length;

  const easy = problems.filter(p => p.difficulty === "Easy").length;
  const medium = problems.filter(p => p.difficulty === "Medium").length;
  const hard = problems.filter(p => p.difficulty === "Hard").length;
  return (
    <div className='dashboard'>
      <h1>LeetTrack Dashboard</h1>
      <div className='stats-grid'>
        <Card label="Total Solved" value={total}/>
        <Card label="Easy" value={easy}/>
        <Card label="Medium" value={medium}/>
        <Card label="Hard" value={hard}/>
     </div>
    </div>

  )
}

export default Dashboard


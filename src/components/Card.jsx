import React from 'react'

function Card({label,value}) {
  return (
    <div className='card'>
      <p className='card-label'>{label}</p>
      <p className='card-value'>{value}</p>
    </div>
  )
}

export default Card

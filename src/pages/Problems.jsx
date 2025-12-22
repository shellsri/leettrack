import React from 'react'

const Problems = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Problems Page</h1>
      </div>
      <div>
        <div className="page">
          <div className="modal">
            <form className="form">
              <input type="text" placeholder="Problem Title" />
              <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <input type="date" />
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problems

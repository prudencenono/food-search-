import React from 'react'

const Header = ({handleChange, handleClick, meal}) => {
  return (
    <div className='header'>
        <h1>Search Meal form Meal DB API</h1>
        <input type="text" onChange={handleChange} value={meal} />
        <button onClick={handleClick}>Search Meal</button>
    </div>
  )
}

export default Header
import React from 'react'

const Score = (props) => {
  return (
    <div className='score'>
        <h2>Score</h2>
        <h2>{props.num}</h2>
    </div>
  )
}

export default Score
import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <section className='counter'>
        <p>{count}</p>
        <div className='buttons'>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
          <button onClick={() => setCount(count -1)}>-</button>
        </div>
        <button className='reset' onClick={() => setCount(0)}>RESET</button>
    </section>
  )
}

export default Counter
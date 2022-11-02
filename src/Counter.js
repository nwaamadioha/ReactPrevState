import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [values, setValues] = useState([])
    const [names, setNames] = useState({ first: "", last: ""})


    const add = () => {
        setCount(prevValue => prevValue + 1)
    }
    const subtract = () => {
        setCount(prevValue => prevValue - 1)
    }

    // Update values of an Array
    const updateValues = (newVal) => {
        //setValues([...values, newVal]) - do not use this rather use prevValue
        setValues(prevValues => [...prevValues, newVal])
    }
    const updateNames = (newVal) => {
        //setValues({...values, first: newVal.first, last: "Ugo"}) - do not use this rather use prevValue
        setNames(prevValues => ({...prevValues, first: "Ugo", last: "Temple"}))
    }

  return (
    <section className='counter'>
        <p>{count}</p>
        <div className='buttons'>
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
        </div>
        <button className='reset' onClick={() => setCount(0)}>RESET</button>
    </section>
  )
}

export default Counter
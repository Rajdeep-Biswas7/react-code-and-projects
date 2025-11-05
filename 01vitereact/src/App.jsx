import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount]= useState(0)
  const addvalue = () => {
    setCount(count + 1)
  }
  const subvalue = () => {
    setCount(count - 1)
  }

  return (
    <>
     <h1> hello world </h1>
     <h2> count value is : {count} </h2>
      <button onClick={addvalue}> increase </button>
      <br/>
      <button onClick={subvalue}> decrease </button>
      <p> footer : {counter}</p>
    </>
  )
}

export default App

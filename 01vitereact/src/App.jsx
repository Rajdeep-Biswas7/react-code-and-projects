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
     <div 
     style={{display: 'flex',
     gap: '10px', 
     justifyContent: 'center',
     alignItems: 'center'}}
     >
     <button onClick={addvalue}> increase </button>
      <button onClick={subvalue}> decrease </button>
     </div>
    </>
  )
}

export default App

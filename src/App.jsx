import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count-1)
  } 

  const reset =()=>{
    setCount(0)
  }

  return (
    <>  
    <div className='container'>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increase}>+</button>
    </div>
    </>
  )
}

export default App

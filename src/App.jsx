import React,{useState} from 'react'
import Calculator from './calculator' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}}>React Calculator</h1>
        <Calculator/>
      </div>
    </>
  )
}

export default App

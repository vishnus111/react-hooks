import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value,setValue] = useState("")


  const onChange = (e)=> {
    const newValue = e.target.value;
    setValue(newValue);
  }

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


        <input placeholder='enter something' onChange={onChange}/>
        {value}
       
      </div>
      
    </>
  )
}

export default App

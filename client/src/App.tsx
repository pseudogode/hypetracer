import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hypetracer</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

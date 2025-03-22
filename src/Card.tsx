import { useState } from 'react'

function Card() {
  const [count, setCount] = useState(2)

  function click() {
    console.log('click')
    setCount(count + 1)
  }

  return (
    <div className="card">
      <button onClick={click}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Card

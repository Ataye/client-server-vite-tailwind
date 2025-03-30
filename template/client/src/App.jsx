import { useState } from 'react'
import PageRouter from './modules/PageRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageRouter />
    </>
  )
}

export default App

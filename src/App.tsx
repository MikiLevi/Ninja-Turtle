import { useState } from 'react';
import './App.css'
import Ninjas from './Ninjas/Ninjas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ninjas />
    </>
  )
}

export default App

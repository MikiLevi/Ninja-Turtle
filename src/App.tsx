import { useState } from 'react';
import './App.css'
import NinjaApp from './Ninjas/NinjaApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NinjaApp />
    </>
  )
}

export default App

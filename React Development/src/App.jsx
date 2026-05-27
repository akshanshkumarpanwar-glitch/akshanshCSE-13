import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './component/Demo'
import Props from './component/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{color:'red'}}>Hello react</h1>
      <Demo />
      <Props name="Vikas" roll="230000" course="Btech"/>
    </>
  )
}

export default App

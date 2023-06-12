import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TreeComponent from './TreeComponent'
import './App.css'

function App() {
  const [obj, setObj] = useState({
    name:'omer'
  })

  return (
    <>
     <TreeComponent data={obj}></TreeComponent>
    </>
  )
}

export default App

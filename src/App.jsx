import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TreeComponent from './TreeComponent'
import './App.css'

function App() {
  const [obj, setObj] = useState([{
    id:1,
    name:'omer',
    children:[{id:2, name:'child'}]
  },
  {
    id:3,
    name:'teas',
    children:[{id:4,name:'turkish tea'} , {id:5,name:'greek tea'}]
  },
  {
    id:6,
    name:'mahmut'
  }
])

  return (
    <>
     <TreeComponent data={obj}>
     </TreeComponent>
    </>
  )
}

export default App

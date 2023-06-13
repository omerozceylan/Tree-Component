import { useState } from "react"
import './App.css'


export default function TreeComponent({data}) {
    
    return (
       data.map((value, index)=> (
            
            <ul>
                <TreeItem children={value.children} name={value.name}></TreeItem>
            </ul>
        )))
  
    
   
}

function TreeItem ({name, children}) {
    const [isExpansed, setExpansed] = useState(false)

    return (
        <li className="listItem" onClick={()=> setExpansed(!isExpansed)}>
            {name}
    
            {children && isExpansed ? (
                <TreeComponent data={children}></TreeComponent>
            ):null}
        </li>
    )
}
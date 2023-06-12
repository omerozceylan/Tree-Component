import { useEffect } from "react"

export default function TreeComponent({data}) {
    
    useEffect(()=> {

    },[])
    return (
        <>
        <ul id="myUL">
        <li><span className="caret">Beverages</span>
            <ul className="nested ">
            <li>Water</li>
            <li>Coffee</li>
            <li><span className="caret">Tea</span>
                <ul className="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li><span className="caret">Green Tea</span>
                    <ul className="nested">
                    <li>Sencha</li>
                    <li>Gyokuro</li>
                    <li>Matcha</li>
                    <li>Pi Lo Chun</li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
        
        </>
    )
}
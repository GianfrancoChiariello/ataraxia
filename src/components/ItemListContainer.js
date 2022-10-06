import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"


function ItemListContainer (props){
    const [state, setState] = useState([])

    console.log(state)
    
    return(
        <div className="itemlistcontainer">
            <ul>
                <li>Bienvenidos!</li>
            </ul>
        </div>
    )
}

export default ItemListContainer
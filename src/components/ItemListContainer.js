import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"
import {fetchDates} from "../json/fetchDates"
import ItemList from "./ItemList"   


function ItemListContainer (){
    const [items, setItems] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        fetchDates()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }, [categoryId])

    return (
        <section className="container">
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer
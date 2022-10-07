import { useEffect, useState } from "react"
import { fetchDates } from "../json/fetchDates"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        fetchDates()
            .then((resp) => {
                setItem( resp.find((item) => item.id === Number(itemId)) )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }, [])

    return (
        <section className="container my-5">
            <ItemDetail item={item}/>
        </section>
    )
}
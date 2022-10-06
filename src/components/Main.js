import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"
import ItemCount from './ItemCount';
import { Products } from "../json/Products"

const Main = ({items}) => {
    const {id} = useParams()
    const {categoria} = useParams()
    const [state, setState] = useState([])


    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            resolve(Products)
        })
        promise.then((result)=>{
            setState(result)
        })
    }, [])

    useEffect(()=>{
        const filtrado = state.filter((item)=>item.id == id)
        setState(filtrado)
    }, [id])

    useEffect(()=>{
        const category = state.filter((item)=>item.categoria == categoria)
        setState(category)
    }, [categoria])


    return(
        <>
            <h1>Productos</h1>
            <div className='list-container'>
                {state.map((item, i)=>{
                    return (
                        <div className='productos'>
                            <NavLink to={`/items/${item.id}`}><img src={item.imgUrl} key={item.id}></img></NavLink>
                            <p>{item.producto}</p>
                            <p>${item.precio}</p>
                            <NavLink to={`/categorias/${item.categoria}`}><p>Stock:{item.stock}</p></NavLink>
                            <ItemCount initial={1} stock={item.stock} onAdd={ItemCount.onAdd}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Main
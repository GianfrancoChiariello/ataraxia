import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd,})=>{
    const [cantidad, setCantidad] = useState(initial)

    const agregar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }
    return(
        <div className='counter'>
            {stock ? (
            <>
                <div className="btnsr">
                    <button id="btns" onClick={restar}>-</button>
                    <input type="text" value={stock? cantidad : 0}></input>
                    <button id="btnr" onClick={agregar}>+</button>
                </div>
                    <button className="agregar" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
            </>
            ):(
                <p>No hay stock</p>
            )}
        </div>
    )
}

export default ItemCount
import { useNavigate } from "react-router-dom"

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container">
            <h1>{item.producto}</h1>    
            <img src={item.imgUrl} alt={item.imgUrl}/>
            <p>{item.categoria}</p>
            <h4>Precio: ${item.precio}</h4>
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail
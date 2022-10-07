import { Link } from "react-router-dom"



const Item = ({item}) => {

    return (
        <div>
            <h2>{item.producto}</h2>
            <img src={item.imgUrl}/>
            <h4>Precio: ${item.precio}</h4>
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2">Ver más</button>
            </Link>
            <hr/>
        </div>
    )
}

export default Item
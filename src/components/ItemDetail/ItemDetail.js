import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ( {item} ) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            {item.stock <=2 && <p><strong>Restan solo {item.stock} unidades!!!</strong></p>}
            <p>Precio: ${item.price}</p>

            {
                item.stock === 0
                ?   <h4>Stock insuficiente</h4>
                :   isInCart(item.id)
                    ?   <Link to="/cart" className="btn btn-success">Finalizar la compra</Link>
                    :    <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />

            
            }       

        </div>
    )
}

export default ItemDetail
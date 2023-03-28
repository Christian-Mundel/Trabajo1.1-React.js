import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrash2Fill } from 'react-icons/bs'


const Cart = () => {
    const { cart, vaciarCarrito, quitarItem, totalCarrito } = useContext(CartContext);

    return (
        <div className="container my-5">
            <h2> Tu compra total es:</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img} alt="imag" />
                        <div>
                            <small>Cantidad de Articulos: {item.cantidad} Precio unitario:{item.price}</small>
                        </div>
                        <p>Precio Total: {item.price * item.cantidad}</p>
                        <button onClick={() => quitarItem(item.id)} className="btn btn-danger"><BsFillTrash2Fill/></button>
                        <hr/>
                    </div>
                ))
            }

            <h3>Total: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className= "btn btn-danger m2">Vaciar Carrito</button>
            </div>
        )
    }

    export default Cart;

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrash2Fill } from 'react-icons/bs'
import { Link } from "react-router-dom" 


const Cart = () => {
    const { cart, vaciarCarrito, quitarItem, totalCarrito } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Aun no has realizado ninguna compra.....</h2>
                <hr/>
                <Link className="btn btn-primary" to="/">Volver</Link>
                </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu Compra total es:</h2>
            <hr/>

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
            <button onClick={vaciarCarrito} className= "btn btn-danger my-3">Vaciar Carrito</button>
            <hr/>
            <Link to="/checkout" className= "btn btn-success my-3">Finalizar tu compra</Link>
        </div>
    )
}

    export default Cart

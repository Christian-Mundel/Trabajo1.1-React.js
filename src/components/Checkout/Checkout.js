import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, updateDoc, addDoc, doc, getDocs, query} from "firebase/firestore"
import { db } from "../../fiberbase/config"



const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues ] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        celular: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 2) {
            alert("El nombre es corto")
            return
        }
        if (values.apellido.length < 2) {
            alert("El apellido es corto")
            return
        }
        if (values.direccion.length < 2) {
            alert("El direccion es corto")
            return
        }
        if (values.email.length < 5) {
            alert("El email es corto")
            return
        }
        if (values.celular.length < 5) {
            alert("El celular es corto")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.doc.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()


        } else {
            alert("Hay faltantes de productos: " + outOfStock.map(i => i.name).join(', '))
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>"FELICITACIONES" ...Tu compra fue un EXITO.</h2>
                <hr/>
                <p>Guardá tu número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
    <div className= "container my-5">
        <h2>Ingrese sus Datos</h2>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input
                value={values.nombre}
                type="text"
                className="form-control my-2"
                placeholder="Nombre"
                name="nombre"
                onChange={handleInputChange}
            />

                <input
                value={values.apellido}
                type="text"
                className="form-control my-2"
                placeholder="Apellido"
                name="apellido"
                onChange={handleInputChange}
            />

                <input
                value={values.direccion}
                type="text"
                className="form-control my-2"
                placeholder="Direccion"
                name="direccion"
                onChange={handleInputChange}
            />

                <input
                value={values.email}
                type="email"
                className="form-control my-2"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
            />

                <input
                value={values.celular}
                type="text"
                className="form-control my-2"
                placeholder="Celular"
                name="celular"
                onChange={handleInputChange}
            />

            <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default Checkout
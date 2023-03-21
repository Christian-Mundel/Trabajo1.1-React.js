import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../components/helpers/pedirDatos"




const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(item)
    console.log(itemId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetailContainer item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
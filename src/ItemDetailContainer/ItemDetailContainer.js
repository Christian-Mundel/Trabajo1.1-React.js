import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../components/helpers/pedirDatos"
import ItemDetail from "../ItemDetailContainer/ItemDetailContainer"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)


    const { itemId } = useParams()

    useEffect(() => {
        // setLoading(true)

        pedirDatos()
            .then((res) => {
                let respuesta = res.find((prod) => prod.id === Number(itemId))
                setItem(respuesta)
            })

    }, [itemId])

    return (
        <div className="container my-5">
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
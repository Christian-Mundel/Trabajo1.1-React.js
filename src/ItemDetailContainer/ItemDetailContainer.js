import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../fiberbase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)


    const { itemId } = useParams()

    useEffect(() => {
        // setLoading(true)

        const docRef = doc( db, "productos", itemId)

        getDoc(docRef)
        .them((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })

    }, [])

    return (
        <div className="container my-5">
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
import './ItemListContainer.css'
import { Button } from 'react-bootstrap'

const ItemlistContainer = ({greeting}) => {

    return (
        <div className="container my-5">
            <h2 className="list-container__title">OnlineGSM</h2>
            <hr/>

        <p>{greeting}</p>

        <Button variant='outline-primary'>Ingresa</Button>
        </div>
    )
}

export default ItemlistContainer
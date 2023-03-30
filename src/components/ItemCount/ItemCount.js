

const ItemCount = ({ max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1 ) 
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }


    return (
        <div>
            <button onClick={handleRestar} 
            className={cantidad === 1 ? "btn btn-outline-dark" : "btn btn-outline-primary" }
            >
                -
            </button>
            
            <span className="mx-3">{cantidad}</span> 
            
            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn btn-outline-dark" : "btn btn-outline-primary" }
                >
                    +
                    </button>

            <br/>

            <button onClick={agregar} className= "btn btn-success"> Agregar al carrito</button>
        </div>
    )

}

export default ItemCount

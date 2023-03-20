import { link } from "react-router-dom"


const Item = ( {item} ) => {

    return (
        <div className='col-3 m-2'>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <link to={`/detail/${item.id}`} className='btn btn-primary'>Ver mas</link>
        </div>
    )
}


export default Item
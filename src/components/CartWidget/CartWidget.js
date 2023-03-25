import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = ()=> {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className='cart-widget'>
            <FaCartPlus className='cart-icon'/>
            <span>{totalCantidad()}</span>
        </div>
    )
}

export default CartWidget
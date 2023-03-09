import { TbTruckLoading } from 'react-icons/fa'
import './Cartwidget.scss'

const CartWidget = ()=> {

    return (
        <div className='cart-widget'>
            <TbTruckLoading className='cart-icon'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget
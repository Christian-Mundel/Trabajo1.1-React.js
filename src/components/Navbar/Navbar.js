import './Navbar.scss' 
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
// import { Button } from 'bootstrap'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'darkcyan'}}>
            <div className="header__container">
                <img src='./imgs/logo-amarillo1.jpg' className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/modulos' className="navbar__link">Modulos</Link>
                    <Link to='/productos/placas de carga' className="navbar__link">Placas de Carga</Link>
                    <Link to='/productos/cargadores' className="navbar__link">Cargadores</Link>
                    <Link to='/productos/accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/login' className='navbar__link'>Login</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Hola: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>logout</button>
            </div>
        </header>
    )
} 
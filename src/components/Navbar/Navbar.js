import './Navbar.scss' 
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = ({red}) => {
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
                </nav>

                <CartWidget />
            </div>
        </header>
    )
} 
import './Navbar.scss' 
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src='./imgs/logo-amarillo1.jpg' className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <p className="navbar__link">Modulos</p>
                    <p className="navbar__link">Placas de Carga</p>
                    <p className="navbar__link">Cargadores</p>
                    <p className="navbar__link">Accesorios</p>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
} 
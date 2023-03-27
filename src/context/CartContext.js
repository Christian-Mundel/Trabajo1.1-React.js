import { useState, createContext } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0) 
    }


    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}   
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "../CartItem/Cart.css";

const Cart = () => {

    const { cart, clear, total } = useContext(CartContext)
    return (
        <div>
            {cart.length
                ?
                <div>
                    {cart.map((item) => <CartItem key={item.id} prod={item} />)}
                    <p className='total-carrito'>Total a pagar: ${total()}</p>
                    <div className='botones-vaciarTerminar'>
                        <button className='boton-vaciarCarrito' onClick={clear}>Vaciar carrito</button>
                        <Link to='/checkout' className='boton-terminarCompra' >Terminar compra</Link>
                    </div>
                </div>
                : <div>
                    <h3 className='titulo-carritoVacio'>No hay productos en el carrito</h3>
                    <Link to='/' className='link-irComprar'> Ir a comprar </Link>
                </div>}
        </div>
    )
}

export default Cart
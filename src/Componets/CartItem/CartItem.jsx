import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.css";


const CartItem = ({ prod }) => {
    const { deleteItem } = useContext(CartContext)
    return (
        <div className='contenedor-carrito'>
            <img className="imagen-carrito" src={prod.imagen} alt={prod.imagen} width={'300px'} height={'300px'} />
            <div className="datos-carrito">
                <p>{prod.nombre}</p>
                <p>${prod.precio}</p>
                <p>Cantidad: {prod.quantity}</p>
                <p>SubTotal: ${prod.quantity * prod.precio}</p>
                <button className="boton-eliminarProducto" onClick={() => deleteItem(prod.id)}>Eliminar producto</button>
            </div>

        </div>
    )
}

export default CartItem
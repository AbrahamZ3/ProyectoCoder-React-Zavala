import { useContext } from "react";
import "./NavBar.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from "../../context/CartContext";


export function CardWidget() {
    const { cartQuantity } = useContext(CartContext)
    return (
        <div>
            <p className='carrito'> <AiOutlineShoppingCart />
                {cartQuantity() > 0 && <span> {cartQuantity()} </span>}
            </p>
        </div>
    )
} 
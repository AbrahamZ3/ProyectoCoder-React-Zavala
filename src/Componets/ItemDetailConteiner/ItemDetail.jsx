import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./StylesIDC/ItemCount.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ producto }) => {

    const [agregarCantidad, setAgregarCantidad] = useState('')

    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        // console.log(`Compraste ${cantidad} del producto ${producto.nombre}`)
        setAgregarCantidad(cantidad)
        addItem(producto, cantidad)
    }
    // console.log(agregarCantidad)

    return (
        <>
            <div className="tarjeta-detalle">
                <h2 className="tarjeta-detalle_titulo">{producto.nombre}</h2>
                <img className="tarjeta-detalle_imagen" src={producto.imagen} alt={producto.nombre} />
                <div className="tarjeta-detalle_caracteristicas">
                    <p className="tarjeta-detalle_descripcion">{producto.descripcion}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
                {agregarCantidad === '' ? <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd} />
                    : <Link to='/cart' className="boton-agregar"> Ir al Carrito </Link>}
            </div>
        </>

    )
}

export default ItemDetail
import ItemCount from "./ItemCount";
import "./StylesIDC/ItemCount.css";


export const ItemDetail = ({ producto }) => {

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} del producto ${producto.nombre}`)
    }

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
                <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd} />
            </div>
        </>

    )
}


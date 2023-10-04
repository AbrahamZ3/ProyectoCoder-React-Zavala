import "./StylesIDC/ItemCount.css";
import { useState } from "react";


const ItemCount = ({ inicial, stock, onAdd }) => {

    const [numero, setNumero] = useState(inicial);

    const suma = () => {
        if (numero < stock) {
            setNumero(numero + 1);
        }
    }

    const resta = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }

    const addToCart = () => {
        onAdd(numero)
    }

    return (
        <>
            <div className="contenedor-contador">
                <div >
                    <button className="resta-contador" onClick={resta}>-</button>
                    <p className="numero-contador">{numero}</p>
                    <button className="suma-contador" onClick={suma}>+</button>
                </div>
                <div>
                    <button className="boton-agregar" onClick={addToCart} disabled={numero === 0} > Agregar al carrito </button>
                </div>
            </div>

        </>
    );
};

export default ItemCount;


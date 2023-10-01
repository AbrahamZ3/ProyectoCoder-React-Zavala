import { useState, useEffect } from "react";
import { getData } from "../../Mock/Data";
import {ItemDetail} from "./ItemDetail";


export const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState({})
    useEffect(() => {
        getData()
            .then((res)=> setProducto(res[2]))
            .catch((error) => console.log(error))
    }, [])
    console.log(producto)

    return (
       <>
       < ItemDetail producto={producto} />
       </>
    )
};


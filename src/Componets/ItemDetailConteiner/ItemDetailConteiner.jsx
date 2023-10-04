import React,{ useState, useEffect } from "react";
import { getData } from "../../Mock/Data";
import  ItemDetail  from "./ItemDetail";


const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        getData()
            .then((res) => setProducto (res[3]))
            // .then((res) => setProducto (res.find((item) => item.id === '02' )))
            .catch((error) => console.log(error))
    }, [])

    console.log(producto)

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
};

export default ItemDetailConteiner;
import React,{ useState, useEffect } from "react";
import { getData } from "../../Mock/Data";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getData()
            // .then((res) => setProducto (res[3]))
             .then((res) => setProducto (res.find((item) => item.id === parseInt(id) )))
            .catch((error) => console.log(error))
    }, [id])

    console.log(producto)

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
};

export default ItemDetailConteiner;
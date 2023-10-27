import React, { useState, useEffect } from "react";
// import { getData } from "../../Mock/Data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState({})
    //  const [loader, setLoader] = useState(false)
    const { id } = useParams()


    // useEffect(() => {
    //     getData()
    //         // .then((res) => setProducto (res[3]))
    //          .then((res) => setProducto (res.find((item) => item.id === parseInt(id) )))
    //         .catch((error) => console.log(error))
    // }, [id])

    useEffect(() => {
        // setLoader(true)
        const collectionProd = collection(db, "productos")
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
            .then((res) => setProducto({ id: res.id, ...res.data() }))
            .catch((error) => console.log(error))
        //  .finally(()=> setLoader(false))
    }, [id])


    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
};

export default ItemDetailConteiner;
import ItemList from "./ItemList";
import './Item.css';
// import { getData } from "../../Mock/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";


const ItemListConteiner = (props) => {
   const [productos, setProductos] = useState([])
   const { categoryId } = useParams()

   // useEffect(() => {
   //    getData()
   //       .then((res) => {
   //          if(categoryId){
   //             setProductos(res.filter((item) => item.categoria === categoryId))
   //          }else {
   //             setProductos(res)
   //          }
   //       })
   //       .catch((error) => console.log(error))
   // }, [categoryId]);

   useEffect(() => {

      const coleccionProductos = categoryId ? query(collection(db, "productos"), where("categoria", "==", categoryId)) : collection(db, "productos")
      getDocs(coleccionProductos)
         .then((res) => {
            const list = res.docs.map((product) => {
               return {
                  id: product.id,
                  ...product.data()
               }
            })
            setProductos(list)
         })
         .catch((error) => console.log(error))

   }, [categoryId])


   return (
      <div>
         <div className="contenedor-productos">
            <h1>Nuestros Productos</h1>
            <ItemList productos={productos} />
         </div>

      </div>
   );
};

export default ItemListConteiner;
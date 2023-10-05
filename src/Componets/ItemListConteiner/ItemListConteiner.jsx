import ItemList from "./ItemList";
import './Item.css';
import { getData } from "../../Mock/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemListConteiner = (props) => {

   const [productos, setProductos] = useState([])

   const { categoryId } = useParams()

   useEffect(() => {
      getData()
         .then((res) => {
            if(categoryId){
               setProductos(res.filter((item) => item.categoria === categoryId))
            }else {
               setProductos(res)
            }
         })

         .catch((error) => console.log(error))
   }, [categoryId]);



   console.log(productos)


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
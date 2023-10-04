import ItemList from "./ItemList";
import './Item.css';
import { getData } from "../../Mock/Data";
import { useEffect, useState } from "react";



const ItemListConteiner = (props) => {

   const [productos, setProductos] = useState([])

  

   useEffect(() => {
      getData()
         .then((res) => setProductos(res))
         .catch((error) => console.log(error))
   }, []);

 

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
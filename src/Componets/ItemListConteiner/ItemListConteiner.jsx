import ItemList from "./ItemList";
import './Item.css';
import { getData } from "../../Mock/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export function ItemListConteiner(props) {

   const [productos, setProductos] = useState([]);
   const { id } = useParams()
   useEffect(() => {
      getData()
         .then((res) => setProductos(res.find((item) => item.id === id)))
         .catch((error) => console.log(error));
   }, [id]);

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

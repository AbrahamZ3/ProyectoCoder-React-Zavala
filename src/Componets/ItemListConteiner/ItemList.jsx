import {Item} from "./Item";
import './Item.css';

const ItemList = ({ productos }) => {
  return (
    <div className='productos-tarjetas'>
      {productos.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
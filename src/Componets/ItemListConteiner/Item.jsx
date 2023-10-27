import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ prod }) => {

  return (
    <div>
      <div className="card">
        <img src={prod.imagen} alt={prod.nombre} />
        <div className="card-body">
          <h2 className="card-title">{prod.nombre}</h2>
          <p className="card-text">{prod.descripcion}</p>
          <p className="card-price">${prod.precio}</p>
          <Link to={`/detail/${prod.id}`} className="card-btn" >Ver más</Link>
        </div>
      </div>
    </div>
  )
};

export default Item
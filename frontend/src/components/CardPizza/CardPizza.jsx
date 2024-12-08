import React from "react";
import "./CardPizza.css";
import {useCart} from "../../context/CartContext"
import {Link} from "react-router-dom"

const CardPizza = ({id, name, price, ingredients, img, desc }) => {
  const {addToCart} = useCart();

const handleAddToCart = () => {
  addToCart({id, name, price, ingredients, img, desc});
};

  return (
    <div className="Card m-3 p-1" >
      <img className="rounded" src={img} alt={name} />
      <div className="Titulo">
        <h3>Pizza {name}</h3>
      </div>
      <hr />
      <p className="descripcion mb-2 text-start"> {desc} </p>
      <p className="ingredients mb-2 text-center"><b>Ingredientes:</b></p>
      {/* <hr />
      <p className="text-center"> {ingredientes}</p> */}
      <ul className="lista de ingredientes ">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}.</li>
        ))}
      </ul>
      <hr />
      <p className="precio text-center">
        <strong>${price}</strong>
      </p>

      <div className="btn d-flex justify-content-evenly">
        <Link to={`/pizza/${id}`} className="btn-vermas btn btn-outline-success">Ver más 👀</Link>
        <button className="btn-añadir btn btn-secondary" onClick={handleAddToCart}>Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;

import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  console.log(inCart, setInCart);

  function handleAddToCart () {
    setInCart(!inCart);
  }

  const itemClass = inCart? "in-cart" : ""
  return (
    <li className = {itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

import { Link } from "react-router-dom";
import Product from "./Product";
import { products } from "../data";

function Body({ onAdd }) {
  return (
    
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 150, marginRight: 50,
    gap: 20,
    marginTop: 50,
     }}>
      {products.map((product) => {
        const { name, price, image, id }  = product;

        return (
          <Link to={`/product/${id}`} key={id}>
          <Product name={name} price={price} image={image} onAdd={onAdd} />
          </Link>
        );
      })}
    </div>
  );
}

export default Body;

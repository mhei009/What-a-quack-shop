import { Link, useParams } from "react-router-dom"

import Product from "../components/Product";
import { products } from '../data'
import { useEffect, useState } from "react";

export default function ItemPage ({ handleAddToCart, cartItems }) {
const {id} = useParams();
const [item, setItem] = useState()

useEffect(() => {
    console.log("using effect");
    const foundItem = products.find((p) => {
    return p.id === +id;
});
    setItem(foundItem)
 }, [id]);

    
if(!item) return <div>The Quack Item does not exist</div>

const {name, price, description, image, onAdd} = item

return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 30 }}>

      <Product image={image} price={price} onAdd={handleAddToCart} />
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "18px", margin: "5px" }}>{name}</p>
      </div>
  
      <div style={{ margin: "10px", textAlign: "center" }}>{description}</div>
  
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        </div>
        
      </div>
    
  );
}  




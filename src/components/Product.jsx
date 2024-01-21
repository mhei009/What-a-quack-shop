function Product({ name, price, description, image, onAdd }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <img width={250} src={image}  alt={name} />
      <p>{name}</p>
      <p> {price}: Sek
      </p>
      <button onClick={onAdd}>+ Add to cart</button>
    </div>
  );
}

export default Product;

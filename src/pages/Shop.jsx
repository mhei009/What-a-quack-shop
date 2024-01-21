  import Header from "../components/Header";
  import Body from "../components/Body";
  
  function Shop ({ cartItems, handleAddToCart }){
    return (
        <div>
          <Header cartItems={cartItems} />
          <Body onAdd={handleAddToCart} />
        </div>
       );
  }
  
export default Shop;
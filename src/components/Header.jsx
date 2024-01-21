import Cart from "./Cart";
import '../../src/index.css'

function Header({ cartItems }) {
  return (
    <div
      style={{
        backgroundColor: "#D24e01",
        minHeight: 50,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        display: "flex",
        fontSize: "2em",
        color: "#FFD801",
        fontFamily: "ItikKecil"
      }}
    >
      <div> What a Quack Shop</div>
      <div style={{ marginLeft: "auto" }}>
        <Cart numItems={cartItems} />
      </div>
    </div>
  );
}

export default Header;

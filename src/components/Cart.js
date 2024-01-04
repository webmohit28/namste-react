import { useSelector } from "react-redux";
import AccordionCategoryItem from "./AccordionCategoryItem";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const handleRemoveItem = (i) => {
    dispatch(removeItem(i));
  }
  return (
    <div className="restaurant-card cart-page" style={{ backgroundColor: '#fff' }} >
      <h2>Cart Items {cartItems.length !== 0 && <button className="btn remove-item" onClick={handleClearCart}>Remove Items</button>}
      </h2>


      {
        cartItems.map((item, index) =>
          <div className="cart-selected-list">
            <h6>{item?.card?.info?.name}</h6>
            <div className="cart-rate"><span className="qty">1</span> ₹{item?.card?.info?.price ? Math.round(item?.card?.info?.price / 100) : Math.round(item?.card?.info?.defaultPrice / 100)}<button type="button" className="remove-specific-item" onClick={() => handleRemoveItem(index)}>x</button></div>

          </div>)
      }
      {cartItems.length === 0 && <p>No Item Added in Cart</p>}
    </div >

  )
}

export default Cart;
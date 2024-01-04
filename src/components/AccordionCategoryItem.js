import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const AccordionCategoryItem = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = (item) => {
    dispatch(addItem(item))
  }
  return (
    <ul className="accordion-content">
      {
        itemCards.map(
          (item) => (<li key={item.card.info.id}>
            <div>
              <span className={item?.card?.info?.isVeg === 1 ? 'veg menu-cat' : 'non-veg menu-cat'}></span>
              <h6>{item.card.info.name}</h6>
              <h6>₹{item?.card?.info?.price ? Math.round(item?.card?.info?.price / 100) : Math.round(item?.card?.info?.defaultPrice / 100)}</h6>
              <p>{item?.card?.info?.description}-</p>
            </div>
            <div className="menu-img">
              <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' + item.card.info.imageId} />
              <button type="button" className="btn add-item" onClick={() => handleAddtoCart(item)}>Add Item +</button>
            </div>


          </li>)
        )
      }

    </ul>);
}

export default AccordionCategoryItem;
import { useState } from "react";
import AccordionCategoryItem from "./AccordionCategoryItem";

const AccordionCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  // console.log(data)
  const { title, itemCards } = data;
  //const [showItem, setShowItem] = useState(false);
  const showHideCatMenu = () => {
    //setShowItem(!showItem);
    setShowIndex();
  }
  return (
    <div className='menu-block'>
      <h5 className="test" onClick={showHideCatMenu}> {title} - ({itemCards.length}) <span>{showItems ? '-' : '+'}</span> </h5>
      {showItems && <AccordionCategoryItem itemCards={itemCards} />}
    </div>
  )
}
export default AccordionCategory;


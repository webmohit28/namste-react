import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utills/useRestaurantMenu';
import AccordionCategory from './AccordionCategory';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [isActive, setIsActive] = useState(false);

  const [showIndex, setShowIndex] = useState(0);


  if (resInfo === null) return <Shimmer />

  const { name, avgRating, city, costForTwoMessage, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;


  const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  //console.log(categories);

  return (
    <div className="restaurant-card">
      <div className="res-head">
        <h2>{name} <span className='avgRating'>{avgRating}*</span></h2>
        <h6>{city} - {costForTwoMessage}</h6>
      </div>
      {/* <ul>
        {
          cuisines.map(item => <li> {item} </li>)
        }
      </ul> */}

      {
        categories.map(
          (cat, index) => <AccordionCategory key={index + 1} data={cat.card.card} showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)} />
        )
      }

    </div>


  )
}

export default RestaurantMenu;
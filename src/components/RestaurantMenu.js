import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utills/useRestaurantMenu';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [isActive, setIsActive] = useState(false);


  if (resInfo === null) return <Shimmer />

  const { name, avgRating, city, costForTwoMessage, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="restaurant-card">
      <h1>{name} <span className='avgRating'>{avgRating}*</span></h1>
      <h3>{city}</h3>
      <h6>{costForTwoMessage}</h6>
      <ul>
        {
          cuisines.map(item => <li> {item} </li>)
        }
      </ul>

      {(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item?.card?.card?.title?.length > 0)).map((item) => {

        if (item?.card?.card?.categories) {
          return (
            <div className='menu-block test' key={item?.card?.card?.id}>
              <h4 onClick={() => setIsActive(!isActive)}> {item?.card?.card?.title}<span>{isActive ? '-' : '+'}</span>
              </h4>
              {isActive && <ul>
                {item?.card?.card?.categories.map((item, index) => (
                  <div key={index}>
                    <h6> {item?.title}({item?.itemCards?.length})</h6>
                    <ul>
                      {item?.itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}- <strong>{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</strong>
                          {/* <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + item?.card?.info?.imageId} className="card-img-top" alt="..." /> */}
                        </li>
                      )
                      )}
                    </ul>
                  </div>
                )
                )}
              </ul>}
            </div>
          );
        }
        else {
          return (

            <div className='menu-block test2' key={item?.card?.card?.id}>
              <h4 onClick={() => setIsActive(!isActive)}> {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})<span>{isActive ? '-' : '+'}</span></h4>
              {isActive && <ul>
                {item?.card?.card?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name} - <strong>{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</strong></li>
                )
                )}
              </ul>}
            </div>
          );
        }
      })}



    </div>


  )
}

export default RestaurantMenu;
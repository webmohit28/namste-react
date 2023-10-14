import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { Menu_API } from '../utills/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => { fetchMenu(); }, []);

  const { resId } = useParams();


  const fetchMenu = async () => {
    const apidata = await fetch(Menu_API + resId);
    const response = await apidata.json();
    setResInfo(response);
    console.log(response);
  }

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
            <div className='menu-block' key={item?.card?.card?.id}>
              <h4> {item?.card?.card?.title}</h4>

              <ul>
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
              </ul>
            </div>
          );
        }
        else {
          return (
            <div className='menu-block' key={item?.card?.card?.id}>
              <h4> {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</h4>
              <ul>
                {item?.card?.card?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name} - <strong>{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</strong></li>
                )
                )}
              </ul>
            </div>
          );
        }
      })}



    </div>


  )
}

export default RestaurantMenu;
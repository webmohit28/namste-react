import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { Menu_API } from '../utills/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => { fetchMenu(); }, []);

  const { resId } = useParams();

  console.log(resId);


  const fetchMenu = async () => {
    const apidata = await fetch(Menu_API + resId);
    console.log(apidata);
    const response = await apidata.json();
    setResInfo(response);
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

      <div className='menu-block'>
        {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card?.title?.length > 0).map(item => <h3 key={item?.card?.card?.id}> {item?.card?.card?.title} </h3>)}
        <ul>
          {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item?.card?.card?.title?.length > 0).map((item => item?.card?.card?.itemCards?.filter(item => item?.card?.info?.isVeg === 1).map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)))}
        </ul>
      </div>

    </div>
  )
}

export default RestaurantMenu;
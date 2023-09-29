import { resList } from "../utills/mockdata";
import RestaurantCard from "../components/RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Appbody = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await result.json();
    setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  const showFilterReestaurant = () => {
    const filterlist = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.4);
    setFilteredRestaurant(filterlist);
  }

  const getSearchlist = () => {
    const filteredSearchList = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
    setFilteredRestaurant(filteredSearchList);
  }
  const getSearchText = (e) => {
    setSearchText(e.target.value);
    if (e.target.value == "") {
      setFilteredRestaurant(listOfRestaurants);
    }
  }

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body-container">
      <div className="search-container my-3 row">
        <div className="search-box "><input type="text" placeholder="seach-item" className="form-control" value={searchText} onChange={getSearchText} />
          <button className="col-3 btn btn-dark" onClick={getSearchlist}>Submit</button>
        </div>
        <button className="btn btn-secondary col-3" onClick={showFilterReestaurant}>Filter Top Rated restaurant</button>
      </div>
      <div className="card-container">
        <div className="row">

          {
            filteredRestaurant?.map((restaurant) => (<RestaurantCard resData={restaurant} key={restaurant?.info?.id} />))
          }
        </div>
      </div>
    </div>
  )
}
export default Appbody;
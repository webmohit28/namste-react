import { resList } from "../utills/mockdata";
import RestaurantCard, { withPromotedLabel, withOpenCloseLabel } from "../components/RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Appbody = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);
  const RestaurantOpenCloseStatus = withOpenCloseLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.823767&lng=75.74005629999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await result.json();
    setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const showFilterReestaurant = () => {
    const filterlist = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.4);
    setFilteredRestaurant(filterlist);
  }

  const getSearchlist = () => {
    const filteredSearchList = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurant(filteredSearchList);
  }
  const showfilterResItem = (e) => {
    setSearchText(e.target.value);
    if (e.target.value == "") {
      setFilteredRestaurant(listOfRestaurants);
    }
    else {
      const filteredSearchList = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredRestaurant(filteredSearchList);
    }
  }

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body-container">
      <div className="search-container my-3 row">
        <div className="search-box col-8 "><input type="text" placeholder="Seach Item" className="form-control" value={searchText} onChange={showfilterResItem} />
          {/* <button className="col-3 btn btn-dark" onClick={getSearchlist}>Submit</button> */}
        </div>
        <button className="btn btn-warning filter-btn col-4" onClick={showFilterReestaurant}>Filter Top Rated restaurant</button>
      </div>

      <div className="card-container">
        <div className="row">

          {/* {
            filteredRestaurant?.map((restaurant) => (<RestaurantCard resData={restaurant} key={restaurant?.info?.id} />))
          } */
            // console.log(filteredRestaurant)
          }
          {

            filteredRestaurant?.map((restaurant) => (
              <Link to={'restaurants/' + restaurant?.info?.id} className="col-md-4 card-link" key={restaurant?.info?.id}>

                {
                  (!restaurant?.info?.availability?.opened) ? (<RestaurantOpenCloseStatus resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                }

              </Link>
            ))
          }
          {
            filteredRestaurant?.length === 0 && (<h2>No Item Found</h2>)
          }
        </div>


      </div>
    </div>
  )


}
export default Appbody;
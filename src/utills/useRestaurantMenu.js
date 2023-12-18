import { useEffect, useState } from "react";
import { Menu_API } from '../utills/constants';


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => { fetchMenu() }, []);
  const fetchMenu = async () => {
    const apidata = await fetch(Menu_API + resId);
    const response = await apidata.json();
    setResInfo(response);
  }

  return resInfo;
}

export default useRestaurantMenu;
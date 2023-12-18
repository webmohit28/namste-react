import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [onlineStaus, setonlineStaus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setonlineStaus(false)
    });

    window.addEventListener("online", (event) => {
      setonlineStaus(true)
    });


  }, []);
  return onlineStaus;

}

export default useOnlineStatus;
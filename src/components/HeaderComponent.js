import { React, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState('Log In');

  const data = useContext(UserContext);
  const { loggedInUser, role } = data;

  const setAutorizeBtn = () => {
    btnName === 'Log In' ? setBtnName('Log Out') : setBtnName('Log In');
  }

  const cartItem = useSelector((store) => store.cart.items);
  //console.log(cartItem);

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Swiggy" style={{ maxWidth: "150px" }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex w-100 justify-content-end">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <Link to="/about" className="nav-link"> About Us</Link> */}
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                  isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                }> Contact Us</NavLink>
              </li>

              <li className="nav-item">
                {
                  loggedInUser && <NavLink to="/cart" className={({ isActive, isPending }) =>
                    isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                  }> Cart <b className="cart-item-num">{cartItem?.length} Item</b></NavLink>
                }
              </li>

              <li className="nav-item ml-auto">
                {
                  loggedInUser ? <button className="nav-link btn-user" title={loggedInUser}>{loggedInUser.split(' ')[0].charAt(0) + '' + loggedInUser.split(' ')[1].charAt(0)}</button> : <button className={btnName === 'Log In' ? 'nav-link btn-login' : 'nav-link btn-logout'} onClick={setAutorizeBtn}>{btnName}</button>
                }

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>


  )
}

export default HeaderComponent;
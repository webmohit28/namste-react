import { React, useState } from "react";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState('Log In');

  const setAutorizeBtn = () => {
    btnName === 'Log In' ? setBtnName('Log Out') : setBtnName('Log In');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5348075.jpeg" alt="Swiggy" style={{ maxHeight: "85px" }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <button className={btnName === 'Log In' ? 'nav-link btn-login' : 'nav-link btn-logout'} onClick={setAutorizeBtn}>{btnName}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderComponent;
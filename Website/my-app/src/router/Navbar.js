import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <div className="row nav">
        <div className="col-md-2 col-sm-4">
          <h1>FADO</h1>
        </div>
        <div className="col-md-6 col-sm-8 nav-input">
          <input type="text" placeholder="Nhập link hoặc tên sản phẩm ..." />
        </div>
        <div className="col-md-1 col-sm-3 icon">
          <i className="fas fa-cart-arrow-down icon-cart"></i>
          <i className="far fa-bell icon-bell"></i>
        </div>
        <div className="col-md-1 col-sm-3">
          <button className="btn-login">Đăng Nhập</button>
        </div>
        <div className="col-md-1 col-sm-3">
          <button className="btn-crown">
            <i className="fas fa-crown"></i>
            FADO VIP
          </button>
        </div>
        <div className="col-md-1 col-sm-3 ">
          <button className="btn-language">
            <i className="fas fa-language"></i>
            Ngôn ngữ
          </button>
        </div>
      </div>
      {/* <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/detail">
          Home
        </Link>
      </li> */}
    </div>
  );
}

{
  /* <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/profile">
      Profile
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">
      About
    </Link>
  </li>
</ul> */
}

export default Navbar;

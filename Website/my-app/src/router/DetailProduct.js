import React from "react";
import Navbar from "./Navbar";

function DetailProduct() {
  return (
    <div className="deatailProduct container">
      <div className="row">
        <div className="img-product col-5">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="content-product col-6">
          <p className=" item name-prod">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </p>
          <div className="star item">
            <span>
              4.0
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </span>
            <span>(12000 đánh giá)</span>
          </div>
          <p className="price-prod item">
            120.000 <sup>đ</sup>
          </p>
          <div>
            <button className=" btn btn-buy ">Mua ngay</button>
            <button className=" btn btn-cart">
              {" "}
              <i className="fas fa-cart-arrow-down"></i> Giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <div className="desc-prod">
        Your perfect pack for everyday use and walks in the forest. Stash your
        laptop (up to 15 inches) in the padded sleeve, your everyday
      </div>
    </div>
  );
}

export default DetailProduct;

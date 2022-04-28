import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
import axios from "axios";
import Navbar from "./Navbar";
import DetailProduct from "./DetailProduct";

function Home() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [check, setCheck] = useState(false);
  const [cateId, setCateId] = useState("");
  const [cateName, setCateName] = useState("");
  const [prodId, setProdId] = useState("");
  const [checkPage, setCheckPage] = useState(false);
  useEffect(() => {
    fetchAPICategory();
    fetchAPIProduct();
    renderCategory();
  }, []);

  const fetchAPICategory = async () => {
    try {
      let resultCate = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(resultCate.data);
      console.log("resultCate ", resultCate.data);
    } catch (error) {
      alert("Loi API Category");
    }
  };

  const fetchAPIProduct = async () => {
    try {
      if (category) {
        let resultIProduct = await axios.get(
          "https://fakestoreapi.com/products"
        );

        console.log("resultItemCate", resultIProduct.data);
        setProduct(resultIProduct.data);
      }
    } catch (error) {
      alert("Loi API Product");
    }
  };

  function GetProduct(itemProduct) {
    // const GetProduct = (itemProduct) => {
    console.log("itemProduct", itemProduct);
    if (product) {
      return product.map((item, index) => {
        if (item.category == itemProduct) {
          // console.log(item.id);

          return (
            <div className=" item-content" key={index}>
              <Link
                to={"/product/" + item.id}
                onClick={() => {
                  // debugger;
                  GetDetailProduct();
                  setProdId(item.id);
                  setCheckPage(true);
                }}
              >
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <p>
                  {item.price} <sup>đ</sup>
                </p>
              </Link>
            </div>
          );
        }
      });
    }
  }
  const getAllProduct = () => {
    // alert("all");
    if (product) {
      return product.map((item, index) => {
        return (
          <div className=" item-content" key={index}>
            <Link
              to={"/product/" + item.id}
              onClick={() => {
                // debugger;
                GetDetailProduct();
                setProdId(item.id);
                setCheckPage(true);
              }}
            >
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>
                {item.price} <sup>đ</sup>
              </p>
            </Link>
          </div>
        );
      });
    }
  };
  function GetDetailProduct(prodId) {
    if (product) {
      return product.map((item, index) => {
        if (item.id == prodId) {
          // alert(prodId);
          return (
            <div className="deatailProduct container">
              <div className="row">
                <div className="img-product col-5">
                  <img src={item.image} alt="" />
                </div>
                <div className="content-product col-6">
                  <p className=" item name-prod">{item.title}</p>
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
                  <p className="price-prod item">{item.price}$</p>
                  <div>
                    <button className=" btn btn-buy ">Mua ngay</button>
                    <button className=" btn btn-cart">
                      {" "}
                      <i className="fas fa-cart-arrow-down"></i> Giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className="desc-prod">{item.description}</div>
            </div>
          );
        }
      });
    }
  }
  const renderCategory = () => {
    if (category) {
      return category.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <div className="categories">
                <Link
                  to={"/category/" + index}
                  className="category"
                  onClick={() => {
                    GetProduct();
                    setCateName(item);
                    setCheck(true);
                    setCateId(index);
                  }}
                >
                  {item}
                </Link>
              </div>
            </li>
          </ul>
        );
      });
    }
  };
  const bodyContent = () => {
    return (
      <div className="row">
        <div className="col-2 nav-body-left">
          <h5>Danh Mục Sản Phẩm</h5>
          {renderCategory()}
        </div>
        <div className="col-10 content container">
          <div className="container-grid-content">
            {check ? GetProduct(cateName) : getAllProduct()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {/* <DetailProduct /> */}
      {checkPage ? GetDetailProduct(prodId) : bodyContent()}

      <Routes>
        <Route exact path={"/category/" + cateId} element={<GetProduct />} />
        <Route exact path={"/detail" + prodId} element={<GetDetailProduct />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />  */}
      </Routes>
    </div>
  );
}

export default Home;

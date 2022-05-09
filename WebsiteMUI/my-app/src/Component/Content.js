import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import NavCategories from "./NavCategories";
import Products from "../Component/Products";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "20px",
    paddingLeft: "20px",
  },
  cateBlock: {},
}));

export default function Content(props) {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [indexCate, setIndexCate] = useState([]);
  const [nameCate, setNameCate] = useState([]);
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkPage, setCheckPage] = useState(false);
  const [idProd, setIdProd] = useState(0);

  useEffect(() => {
    fetchAPICategory();
    fetchAPIProduct();
  }, []);
  const fetchAPICategory = async () => {
    try {
      let resultCate = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(resultCate.data);
    } catch (error) {
      alert(error);
    }
  };

  const fetchAPIProduct = async () => {
    try {
      if (category) {
        let resultProduct = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProduct(resultProduct.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  const onChangeCategory1 = (categogy1) => {
    setNameCate(categogy1);
    setCheckStatus(true);
  };
  const onChangePage = (idProd) => {
    setIdProd(idProd);
    setCheckPage(true);
  };
  const returnDetail = () => {
    setCheckPage(false);
    (<alert></alert>)(checkPage);
  };
  const classes = useStyles();
  return (
    <div className={classes.content}>
      {checkPage ? null : (
        <Grid container spacing={2}>
          <Grid item md={2} sm={4} xs={4}>
            <Typography variant="h6">DANH MỤC SẢN PHẨM</Typography>
            <NavCategories
              className={classes.cateBlock}
              category={category}
              onChangeCategory={(categogy) => {
                onChangeCategory1(categogy);
              }}
            />
          </Grid>
          <Grid item md={10} sm={8} xs={8}>
            <Grid container spacing={2}>
              <Products
                product={product}
                nameCate={nameCate}
                checkStatus={checkStatus}
                onChangePage={(idProd) => {
                  onChangePage(idProd);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Routes>
        <Route exact path={"/category/" + indexCate} element={<Products />} />
        <Route
          exact
          path={"/detail/product/" + idProd}
          element={
            checkPage ? <Detail idProd={idProd} product={product} /> : null
          }
        />
        <Route
          path="/hello"
          element={
            <Content
              returnDetail={() => {
                returnDetail();
              }}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

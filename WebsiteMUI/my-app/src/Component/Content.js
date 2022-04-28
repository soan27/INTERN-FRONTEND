import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import NavCategories from "./NavCategories";
import Products from "../Component/Products";
import { Routes, Route, Link } from "react-router-dom";

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
      console.log(resultCate);
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
        console.log(resultProduct.data);
        setProduct(resultProduct.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container spacing={2}>
        <Grid item md={2} sm={4} xs={4}>
          <Typography variant="h6">DANH MỤC SẢN PHẨM</Typography>
          <NavCategories
            className={classes.cateBlock}
            category={category}
            setNameCate={props.setCategory}
            setIndexCate={props.setIndexCate}
          />
        </Grid>
        <Grid item md={10} sm={8} xs={8}>
          <Grid container spacing={2}>
            <Products product={product} nameCate={nameCate} />
          </Grid>
        </Grid>
      </Grid>
      <Routes>
        <Route
          exact
          path={"/category/" + setIndexCate}
          element={<Products />}
        />
        {/* <Route exact path={"/detail" + prodId} element={<GetDetailProduct />} /> */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />  */}
      </Routes>
    </div>
  );
}

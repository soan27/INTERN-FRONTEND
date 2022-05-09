import React, { useState } from "react";
import { Grid, TablePagination, Typography } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Detail from "./Detail";

const useStyles = makeStyles((theme) => ({
  imageProd: {
    height: "230px",
    width: "230px",
    display: "block",
    margin: "auto",
  },
  prod: {
    border: "1px solid black",
    gap: "10",
  },
  title: {
    paddingLeft: "12px",
    fontWeight: "500",
    height: "70px",
  },
  price: {
    paddingLeft: "12px",
    fontWeight: "700",
  },
  pagination: {
    margin: "30px 0",
    fontSize: "18px",
    backGroundColor: "#d5d5d5",
  },
  itemCate: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    border: "1px solid white",
    borderRadius: "7px",
    marginTop: "10px",
    paddingLeft: "10px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  linkDetail: {
    textDecoration: "none",
    color: "black",
  },
}));
function Products(props) {
  const { product, nameCate, checkStatus, onChangePage } = props;
  const [pageIndex, setPageIndex] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(8);
  const [idProd, setIdProd] = useState(0);
  const [checkPage, setCheckPage] = useState(false);
  let cntItemCate = 0;
  // let idProd = 0;
  const classes = useStyles();
  const getAllProduct = () => {
    if (product) {
      console.log(product);
      return product
        .slice(pageIndex * rowPerPage, pageIndex * rowPerPage + rowPerPage)
        .map((item, index) => {
          return (
            <Grid item md={3} sm={6} xs={12} key={index}>
              <div className={classes.prod}>
                <Link
                  to={"/detail/product/" + item.id}
                  onClick={() => {
                    // setIdProd(item.id);
                    setCheckPage(true);
                    onChangePage(item.id);
                  }}
                  className={classes.linkDetail}
                >
                  <img src={item.image} className={classes.imageProd} alt="" />
                  <p className={classes.title}> {item.title} </p>
                  <p className={classes.price}> {item.price} $</p>
                </Link>
              </div>
            </Grid>
          );
        });
    }
  };

  const getItemProductByCate = () => {
    // debugger;
    if (product) {
      let listProd = [];

      product.map((item, index) => {
        if (item.category == nameCate) {
          listProd.push(item);
        }
      });
      cntItemCate = listProd.length;
      if (listProd) {
        return listProd
          .slice(pageIndex * rowPerPage, pageIndex * rowPerPage + rowPerPage)
          .map((item, index) => {
            return (
              <Grid item md={3} sm={6} xs={12} key={index}>
                <div className={classes.prod}>
                  <Link
                    to={"/detail/product/" + item.id}
                    onClick={() => {
                      // setIdProd(item.id);
                      setCheckPage(true);
                      onChangePage(item.id);
                    }}
                    className={classes.linkDetail}
                  >
                    <img
                      src={item.image}
                      className={classes.imageProd}
                      alt=""
                    />
                    <p className={classes.title}> {item.title} </p>
                    <p className={classes.price}> {item.price} $</p>
                  </Link>
                </div>
              </Grid>
            );
          });
      }
    }
  };
  const handlePageChange = (event, page) => {
    setPageIndex(page);
  };

  return (
    <>
      {checkPage ? null : (
        <Grid container spacing={2}>
          {checkStatus ? getItemProductByCate(nameCate) : getAllProduct()}
          <Grid item xs={12}>
            <div>
              <TablePagination
                count={checkStatus ? cntItemCate : product.length}
                page={pageIndex}
                rowsPerPage={rowPerPage}
                rowsPerPageOptions={[8, 16]}
                onPageChange={handlePageChange}
                className={classes.pagination}
              />
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Products;

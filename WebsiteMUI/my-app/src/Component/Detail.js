import { makeStyles } from "@material-ui/styles";
import React from "react";
import Gird from "@material-ui/core/Grid";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  itemImageMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
  },
  btnHistory: {
    margin: "20px 0",
  },
  btnBuy: {
    marginRight: "20px",
  },
}));
function Detail(props) {
  const classes = useStyles();
  const { idProd, product, returnDetail } = props;
  const getDetailProdById = () => {
    if (product) {
      return product.map((item, index) => {
        if (item.id == idProd) {
          return (
            <Gird container spacing={2}>
              <Gird item md={5}>
                <div className={classes.itemImageMain}>
                  <img src={item.image} alt="" height={300} width={300} />
                </div>
                <Gird container spacing={2}>
                  <Gird item md={3} sm={6} xs={12}>
                    <img src="https://picsum.photos/100" alt="" />
                  </Gird>
                  <Gird item md={3} sm={6} xs={12}>
                    <img src="https://picsum.photos/100" alt="" />
                  </Gird>
                  <Gird item md={3} sm={6} xs={12}>
                    <img src="https://picsum.photos/100" alt="" />
                  </Gird>
                  <Gird item md={3} sm={6} xs={12}>
                    <img src="https://picsum.photos/100" alt="" />
                  </Gird>
                </Gird>
              </Gird>
              <Gird
                item
                md={7}
                container
                direction="column"
                justifyContent="space-around"
                alignItems="flex-start"
              >
                <Typography variant="h6" className={classes.paper}>
                  {item.title}
                </Typography>
                <Typography variant="h6" className="star item">
                  <span>
                    4.0
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span>(12000 đánh giá)</span>
                </Typography>
                <Typography variant="h6" className={classes.paper}>
                  {item.price}$
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btnBuy}
                  >
                    Mua ngay
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className=" btn btn-cart"
                  >
                    {" "}
                    <i className="fas fa-cart-arrow-down"></i> Giỏ hàng
                  </Button>
                </div>
              </Gird>
            </Gird>
          );
        }
      });
    }
  };
  return (
    <div>
      <Button variant="outlined" color="primary">
        <Link
          to={"/hello"}
          onClick={() => {
            returnDetail();
          }}
        >
          <ArrowBackIcon />
        </Link>
      </Button>
      {getDetailProdById()}
      {/* <Routes>
        <Route exact path={"/detail/product/"} element={<Detail />} />
      </Routes> */}
    </div>
  );
}

export default Detail;

import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import logo from "./image/logo.svg";
import iconCart from "./image/icon-cart.svg";
import avatar from "./image/image-avatar.png";
import image1 from "./image/image-product-1.jpg";
import image2 from "./image/image-product-2-thumbnail.jpg";
import image3 from "./image/image-product-3-thumbnail.jpg";
import image4 from "./image/image-product-4-thumbnail.jpg";
import iconMinus from "./image/icon-minus.svg";
import iconPlus from "./image/icon-plus.svg";
import iconDetele from "./image/icon-delete.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
  },
  itemNav: {
    color: "gray",
    textAlign: "center",
    "&:hover": {
      color: "black",
      borderBottom: "5px solid #ff9800",
    },
  },
  imgAvt: {
    width: "50px",
    height: "50px",
  },
  imgCenter: {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "400px",
    borderRadius: "15px",
  },
  blockImgCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: "50px",
  },
  img: {
    borderRadius: "15px",
  },
  titleCompany: {
    color: "#ff9800",
    fontSize: "18px",
    fontWeight: "700",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
  },
  description: {
    color: "gray",
  },
  blockDiscountPrice: {
    display: "flex",
  },
  discountPrice: {
    fontWeight: "700",
    fontSize: "24px",
  },
  percentDisPrice: {
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    color: "#ff9800",
    background: "#e7d4b9",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "500",
  },
  cost: {
    color: "gray",
    textDecoration: "line-through",
  },
  blockBtn: {
    display: "flex",
    marginTop: "30px",
  },
  btnChangeQuantity: {
    display: "flex",
    width: "150px",
    textAlign: "center",
    marginRight: "10px",
    justifyContent: "space-around",
    height: "50px",
    alignItems: "center",
    background: "#f3eded",
    borderRadius: "5px",
  },
  btn: {
    border: "none",
  },
  btnCart: {
    background: "#ff9800",
    border: "none",
    width: "250px",
    color: "white",
    fontSize: "16px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  detailDescription: {
    marginLeft: "50px",
  },
  cartShopping: {
    position: "absolute",
    border: "1px solid black",
  },
  btnCheckout: {
    background: "#ff9800",
    border: "none",
    fontSize: "16px",
    borderRadius: "10px",
    height: "50px",
    width: "250px",
  },
  detailCartShopping: {
    display: "flex",
  },
}));
function Detail() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Grid container spacing={2} className={classes.navbar}>
            <Grid item md={2} sm={4} xs={4}>
              <Typography variant="h4">
                <img src={logo} alt="" />
              </Typography>
            </Grid>
            <Grid item md={1} className={classes.itemNav}>
              <Typography>Collections</Typography>
            </Grid>
            <Grid item md={1} className={classes.itemNav}>
              <Typography>Men</Typography>
            </Grid>
            <Grid item md={1} className={classes.itemNav}>
              <Typography>Woman</Typography>
            </Grid>
            <Grid item md={1} className={classes.itemNav}>
              <Typography>About</Typography>
            </Grid>
            <Grid item md={1} className={classes.itemNav}>
              <Typography>Contact</Typography>
            </Grid>
            <Grid item md={3}></Grid>
            <Grid item md={1}>
              <Typography>
                <img src={iconCart} alt="" />
              </Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>
                <img src={avatar} alt="" className={classes.imgAvt} />
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <div className={classes.cartShopping}>
            <p>Cart</p>
            <hr />
            <div>
              <img src={image1} alt="" height={50} width={50} />
              <div className="detailCartShopping">
                <p>Fail Limmited Edition Sneakers</p>
                <p>
                  <span>$125.00 </span>
                  <span>x </span>
                  <span>3 </span>
                  <span>$375.00</span>
                </p>
                <button>
                  <img src={iconDetele} alt="" />
                </button>
              </div>
              <button className={classes.btnCheckout}>Checkout</button>
            </div>
          </div>
          <Grid container spacing={2} className={classes.content}>
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <Grid container spacing={2}>
                <Grid item md={12} className={classes.blockImgCenter}>
                  <img src={image1} alt="" className={classes.imgCenter} />
                </Grid>
              </Grid>
              {/* <div className="blockImgCenter">
               
              </div> */}
              <Grid container spacing={2}>
                <Grid item md={3}>
                  <img
                    src={image1}
                    alt=""
                    height={100}
                    width={100}
                    className={classes.img}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={image2}
                    alt=""
                    height={100}
                    width={100}
                    className={classes.img}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={image3}
                    alt=""
                    height={100}
                    width={100}
                    className={classes.img}
                  />
                </Grid>
                <Grid item md={3}>
                  <img
                    src={image4}
                    alt=""
                    height={100}
                    width={100}
                    className={classes.img}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5} className={classes.detailDescription}>
              <p className={classes.titleCompany}>SNEAKER COMPANY</p>
              <p className={classes.title}>Fail Limmited Edition Sneakers</p>
              <p className={classes.description}>
                These low-profile sneakers are your prefecr casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer
              </p>
              <div className={classes.blockDiscountPrice}>
                <p className={classes.discountPrice}>$125.00</p>
                <p className={classes.percentDisPrice}>50%</p>
              </div>
              <div className={classes.cost}>$250.00</div>
              <div className={classes.blockBtn}>
                <div className={classes.btnChangeQuantity}>
                  <button className={classes.btn} variant="contained">
                    {" "}
                    <img src={iconMinus} alt="" />
                  </button>
                  <p>0</p>
                  <button className={classes.btn}>
                    {" "}
                    <img src={iconPlus} alt="" />
                  </button>
                </div>

                <button className={classes.btnCart}>
                  <ShoppingCartIcon />
                  Add to card
                </button>
              </div>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </div>
  );
}

export default Detail;

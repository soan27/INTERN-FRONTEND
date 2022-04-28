import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: "#eaedf1",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
  },
  inputSearch: {
    width: "100%",
    borderRadius: "20px",
    height: "40px",
    // paddingLeft: "20px",
  },
  searchIcon: {
    position: "absolute",
    top: "37%",
    right: "4%",
  },
  cartBellIcon: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "25px",
  },
  loginBlock: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  btnLogin: {
    fontSize: "13px",
    backgroundColor: "black",
    color: "white",
    margin: "auto",
    borderRadius: "20px",
    width: "100%",
    padding: " 5px 0",
  },
  btnVoucher: {
    fontSize: "11px",
    backgroundColor: "white",
    color: "black",
    margin: "auto",
    borderRadius: "20px",
    width: "100%",
    padding: "2px 0",
    fontWeight: "700",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

function MyNavbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={2} sm={4} xs={4}>
          <Typography variant="h4" className={classes.paper}>
            FADO
          </Typography>
        </Grid>
        <Grid item md={6} sm={8} xs={8}>
          <Typography variant="h6" className={classes.paper}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <input
              type="text"
              className={classes.inputSearch}
              placeholder="Search ..."
            />
          </Typography>
        </Grid>
        <Grid item md={1} sm={2} xs={3}>
          <Typography
            variant="h6"
            className={classes.paper + " " + classes.cartBellIcon}
            container
          >
            <ShoppingCartIcon />
            <NotificationsIcon />
          </Typography>
        </Grid>
        <Grid item md={1} sm={4} xs={3}>
          <Typography variant="h6" className={classes.loginBlock}>
            <Button className={classes.btnLogin}>Đăng nhập</Button>
          </Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={3}>
          <Typography variant="h6" className={classes.loginBlock}>
            <Button className={classes.btnVoucher}>
              <i className="fas fa-crown"></i>
              <span>FADO VIP</span>
            </Button>
          </Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={3}>
          <Typography variant="h6" className={classes.loginBlock}>
            <Button className={classes.btnVoucher}>
              <i className="fas fa-language"></i>
              <span>NGÔN NGỮ</span>
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyNavbar;

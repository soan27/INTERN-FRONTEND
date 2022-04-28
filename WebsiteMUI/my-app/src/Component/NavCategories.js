import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Routes, Route, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
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
}));

function NavCategories(props) {
  const classes = useStyles();
  const { category } = props;
  const [nameCate, setNameCate] = useState("");
  const [indexCate, setIndexCate] = useState("");
  const renderCategory = (props) => {
    if (category) {
      return category.map((item, index) => {
        return (
          <Typography className={classes.itemCate}>
            <Link
              to={"/category/" + index}
              onClick={() => {
                props.setNameCate(item);
                props.setIndexCate(index);
              }}
            >
              {item}
            </Link>
          </Typography>
        );
      });
    }
  };
  return <div>{renderCategory()}</div>;
}

export default NavCategories;

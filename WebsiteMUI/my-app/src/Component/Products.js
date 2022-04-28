import React, { useState } from "react";
import { Grid, TablePagination, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
// import { DataGrid } from "@mui/x-data-grid";

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
}));
function Products(props) {
  const { product, nameCate } = props;
  const [pageIndex, setPageIndex] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(8);
  const classes = useStyles();
  const getAllProduct = () => {
    if (product) {
      console.log(product);
      return product
        .slice(pageIndex * rowPerPage, pageIndex * rowPerPage + rowPerPage)
        .map((item, index) => {
          if (item.category == nameCate) {
            return (
              // <DataGrid>
              <Grid item md={3} className={classes.prod}>
                <img src={item.image} className={classes.imageProd} alt="" />
                <p className={classes.title}> {item.title} </p>
                <p className={classes.price}> {item.price} $</p>
              </Grid>
              // </DataGrid>
            );
          }
        });
    }
  };
  const handlePageChange = (event, page) => {
    setPageIndex(page);
  };

  return (
    <>
      {getAllProduct()}
      <TablePagination
        count={product.length}
        page={pageIndex}
        rowsPerPage={rowPerPage}
        rowsPerPageOptions={[8, 12, 16, 20]}
        onPageChange={handlePageChange}
        className={classes.pagination}
      />
    </>
  );
}

export default Products;

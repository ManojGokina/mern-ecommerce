import React from "react";
import HeadComp from "../utils/HeadComp";
import PrimarySearchAppBar from "./Header";
import { Grid, Card} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Categories from "./Categories";
import TopSelling from "./TopSelling";

const useStyles = makeStyles((theme?: any) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    justifyContent: "center",
  },
}));

const LoginForm: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       {/* <Grid item xs={12} sm={12} md={12}>
         <Card>Alert Zone</Card>
        </Grid> */}
      <PrimarySearchAppBar />
      {/* <Grid item xs={12} sm={12} md={12}>
         <Card>offers Zone</Card>
        </Grid> */}
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={12}>
          <HeadComp />
          <Categories />
          <TopSelling />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;

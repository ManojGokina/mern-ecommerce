import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import cartImage from "../images/cart4.jpg";

const useStyles = makeStyles((theme?: any) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    justifyContent: "center",
  },
  formGrid: {
    margin: "auto !important",
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
    marginTop: "20px !important",
  },
  image: {
    width: "100%",
  },
  signUp: {
    textAlign: "end",
  },
  loginText: {
    color: "gray",
    fontSize: "17px !important",
  },
  manageText: {
    color: "gray",
    fontSize: "13px !important",
    marginBottom: "20px !important",
    fontFamily: "sans-serif",
  },
  welcomeText: {
    fontWeight: "500",
  },
  password: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    fontFamily: "sans-serif",
  },
}));

const LoginForm: React.FC = () => {
  const classes = useStyles();

  const [loginInfo, setLoginInfo] = useState();
  const [formValues, setFormValues] = useState({
    email: {
      value: "",
      error: false,
      errorMessage: "Please enter your email",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "Please enter your password",
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((initialVal: any) => ({
      ...initialVal,
      [name]: {
        ...initialVal[name],
        value,
      },
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formValues.email.value === "") {
      formValues.email.error = true;
    } else if (formValues.password.value === "") {
      formValues.password.error = true;
    } else {
      formValues.email.error = false;
      formValues.password.error = false;
      console.log(formValues);
    }
  };

  console.log(formValues)

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={6} md={7}>
          <img src={cartImage} alt="loginCartImage" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.formGrid}>
          <Typography variant="h6" className={classes.loginText}>
            LOGIN
          </Typography>
          <Typography variant="h5" className={classes.welcomeText}>
            Welcome Back
          </Typography>
          <Typography variant="h6" className={classes.manageText}>
            Login to manage your account.
          </Typography>
          <p style={{ fontFamily: "sans-serif" }}>Enter Your Email</p>
          <TextField
            id="username"
            label="Email"
            variant="outlined"
            className={classes.textField}
            name="email"
            type="email"
            onChange={handleChange}
            required
            error={formValues.email.error}
            helperText={formValues.email.error && formValues.email.errorMessage}
          />
          <div className={classes.password}>
            <p style={{ fontFamily: "sans-serif" }}>Enter Your Password</p>
            <p
              style={{
                color: "#005bb5",
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              <strong>Forgot Password?</strong>
            </p>
          </div>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className={classes.textField}
            name="password"
            onChange={handleChange}
            required
            error={formValues.password.error}
            helperText={formValues.password.error && formValues.password.errorMessage}
          />
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={8} md={8} style={{ marginTop: "20px" }}>
              <p className={classes.signUp}>
                Don't have an account?{" "}
                <strong
                  style={{
                    color: "#005bb5",
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                  }}
                >
                  Sign Up
                </strong>{" "}
                here!
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;

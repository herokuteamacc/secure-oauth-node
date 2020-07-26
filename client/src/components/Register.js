import React, { Fragment, useState } from "react";

//Styling
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";


import HerokuLogo from "../assets/images/HerokuImage.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">Deloitte Heroku App Team</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, firstName, lastName } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, firstName, lastName };
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);

      localStorage.setItem("token", parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <Grid container justify="center">
          <div className={classes.paper}>
            <img src={HerokuLogo} height="120" />
          </div>
        </Grid>
        <div className={classes.paper}>
          <h1>Sign Up</h1>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control my-3"
              value={firstName}
              onChange={(e) => onChange(e)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control my-3"
              value={lastName}
              onChange={(e) => onChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Username"
              className="form-control my-3"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control my-3"
              value={password}
              onChange={(e) => onChange(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" className="help-auth-text">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Register;

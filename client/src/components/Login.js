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

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      const status = parseRes.success;
      if (status == true) {
        const respToken = parseRes.accessToken.token;
        console.log(JSON.stringify(respToken));

        localStorage.setItem("token", respToken);
        setAuth(true);
      } else setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" maxWidth="xs" className="signin">
        <Grid container justify="center">
          <div className={classes.paper}>
            <img src={HerokuLogo} height="120" />
          </div>
        </Grid>
        <div className={classes.paper}>
          <h1>Sign In</h1>
          <form onSubmit={onSubmitForm}>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/register" className="help-auth-text">
                  Visiting for the first time? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Login;

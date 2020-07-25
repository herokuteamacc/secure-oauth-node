import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import { useHistory } from "react-router";
import Loader from '../Loader/Loader';
import { connect } from 'react-redux'
//import login from '../../actions/login';
import PropTypes from 'prop-types';
import './SignIn.scss';
import HerokuLogo from '../../assets/images/HerokuImage.png';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to="/">
               Deloitte App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn({loading, error }) {
    const classes = useStyles();
    let history = useHistory();
//    function handleSignIn(values) {
  //      dispatch(login(values, history));
    //    console.log(values);
   //}

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    }

    useEffect(() => {
        if(!loading){
            localStorage.removeItem('usertoken');
            localStorage.removeItem('state');
           // dispatch({ type: 'LOGOUT_USER', response: null });
        }
    }, [loading]); 
    

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate
        //,onSubmit: values => {
          //  handleSignIn(values);
        //}
    });
    return (
        <Container component="main" maxWidth="xs" className="signin">
            <Loader show={loading} />
            <div className={classes.paper}>
                <Grid container justify="center">
                    <div className={classes.deloitteAvatar}>
                        <img src={HerokuLogo} height="120"/>
                    </div>
                </Grid>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        size="small"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="text-small-2"
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={(formik.touched.email && formik.errors.email) && formik.errors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        size="small"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={(formik.touched.password && formik.errors.password) && formik.errors.password}
                    />
                    
                    {error && !Array.isArray(error) && typeof(error)==='string' && <Typography component="h3" variant="body1" style={{'textAlign':'center'}}>
                        <span className="text-small-2" style={{color:'#da291c'}}>
                            {error}
                        </span>
                    </Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/forgot" className="help-auth-text">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" className="help-auth-text">
                                {"Don't have an account?  Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

//SignIn.propTypes = {
  //  loading: PropTypes.bool.isRequired
//}

//function mapStateToProps(state) {
  //  return {
    //    loading: state.loading,
      //  error: state.login.loginerror
    //}
//}

//export default connect(mapStateToProps)(SignIn)
export default SignIn

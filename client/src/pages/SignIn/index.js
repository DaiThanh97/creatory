import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { validationSignIn } from './../../validations';
import { signInActSaga, loadingSignInAct } from './../../redux/actions/user.action';
import { useStyles } from './style';
import { CircularProgress } from '@material-ui/core';

function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loadingSignIn } = useSelector(state => state.userReducer);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSignIn,
        onSubmit: (values) => {
            // Dispatch action sign in to saga
            dispatch(signInActSaga({ ...values }));
            // Dispatch loading signIn
            dispatch(loadingSignInAct(true));
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        color="secondary"
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        color="secondary"
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="secondary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        disabled={loadingSignIn}
                    >
                        {loadingSignIn ? <CircularProgress color="secondary" className={classes.circularProgress} size={20} /> : 'Sign In'}
                    </Button>
                </form>
                <Grid container>
                    <Grid item xs>
                        <Link color="textPrimary" href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link color="textPrimary" href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default memo(SignIn);
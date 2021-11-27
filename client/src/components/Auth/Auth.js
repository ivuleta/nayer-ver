import React, { useState } from 'react';

import  { Button, Paper, Grid, Typography, Container, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

import Input from './Input';

const initalState = {firstName: '', lastName: '', sex: '', email: '', password: '', confirmPassword: ''};

const Auth = () =>
{
    const classes = useStyles();
    const [userData, setUserData] = useState(initalState);

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleChange = (e) => 
    {
        setUserData({ ... userData, [e.target.name]: e.target.value });
    };
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(isSignUp)
        {
            
        }
        else 
        {
            
        }
    };

    const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

    return ( 
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
            </Paper>
            <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Log In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half/>
                                <Input name="sex" label="Sex" handleChange={handleChange} autoFocus half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/> }
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className="classes.submit">
                    {isSignUp ? 'Sign Up' : 'Log In'}
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? "Already have an account? Login" : "Dont't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Auth;
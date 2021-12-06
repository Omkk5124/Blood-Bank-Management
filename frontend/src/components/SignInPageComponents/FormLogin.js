import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { InputAdornment } from "@material-ui/core";
import AccountBox from '@material-ui/icons/AccountBox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Typography,Button } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles } from "@material-ui/styles";
import "./Form.css";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  loginfail:{
      padding: '0px',
         margin: '0px',
        
       },
  image: {
     backgroundImage: 'url(https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
     backgroundRepeat: 'no-repeat',
     backgroundColor:
       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
     backgroundSize: 'cover', 
     backgroundPosition: 'left center',
   },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    color :'primary',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
    
  },
  label:{
    backgroundColor:"white"
  }
}));
const FormLogin = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors,ErrorsFlag } = useForm(submitForm,
    validate);
    const classes=useStyles();
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5}  elevation={6} square>
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
            Sign in
    </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <Typography gutterBottom variant="caption" align='center'>
           Welcome!!!!!
        </Typography>
        {/* <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
        <div>
          <label htmlFor="username" className="form-label">
          
          </label>
          <div className={classes.loginfail}>
          <TextField
           
           InputProps={{
             endAdornment: (
               <InputAdornment position='end'>
                 <AccountBox/>
               </InputAdornment>
             ),
             classes:{
               root:classes.label
             }
           }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text" 
              id="username"
              value={values.username} 
              onChange={handleChange} 
              error={ErrorsFlag.errorFlagUsername}
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
          
          </div>
          {/* <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          /> */}
          <Typography variant="caption">
            <div className={classes.loginfail}>
          {errors.username && <p style={{color:'#ed3b4a'}}>{errors.username}</p>}
          </div>
          </Typography>
        </div>
        

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            
          </label>
          <TextField
           InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VpnKeyIcon/>
              </InputAdornment>
            ),
          }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              error={ErrorsFlag.errorFlagPassword}
            />
          
          {/* <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          /> */}
          <Typography variant="caption">
            <div className={classes.loginfail}>
          {errors.password && <p style={{color:'#ed3b4a'}}>{errors.password}</p>}
          </div>
          </Typography>
          
        </div>
        <br/>
        <br/>
        <Button
              type="submit"
              //fullWidth
              style={{backgroundColor:'#252525',color:'white'}}
              variant="contained"
              // color="primary"
              className={classes.submit}
            >
              Sign In
        </Button>
        {/* <Grid>
              <Grid item xs style={{margin:"10px"}}>
              <span className="form-input-resetpwd">
                <Link  href="/resetpwd" variant="body2">
                  Forgot password?
                </Link>
              </span>
              </Grid>
              <Grid item>
                <Link  href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Grid> */}
        {/* <span className="form-input-resetpwd">
          <Typography variant='caption'>
           <a href="/resetpwd">Forgot Password</a>
          </Typography>

        </span>
        <br/>
        <span className="form-input-login">
          <Typography variant='caption'>
          Don't have an account? Signup <a href="/signup">here</a>
          </Typography>
        </span> */}
      </form>
    </div>
    </Grid>
    </Grid>
  );
};

export default FormLogin;

import React from "react";
import useForm from "./useForm";
import { Avatar } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import SchoolIcon from '@material-ui/icons/School';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import FingerPrint from "@material-ui/icons/Fingerprint";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { InputAdornment } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validate from "./validateInfo";
import { Button, Select, TextField, Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import "./Form.css";
import { makeStyles } from "@material-ui/styles";


// const useStyles =makeStyles(
//   {
//     TextBoxes:{
//       display:'flex',
//       // width: '600 px',
//       justifyContent: 'center'
//       // paddingLeft:'100px'
//     },
//     Text:{
//       padding:'10px'
//     }
//   }
// )
const useStyles = makeStyles((theme) => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const FormSignup = ({submitForm}) => {
  const classes =useStyles();
  const { handleChange, values, handleSubmit, errors,ErrorsFlag} = useForm(submitForm,
    validate);
  
  return (
    <Container component="main" maxWidth="xs" >
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
       <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate >
      
        
        
      <Grid container spacing={2}>  
        
      <Grid item xs={12} sm={6}> 
          <label htmlFor="firstname" className="form-label">
            
          </label>
          
          <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <AccountCircleIcon/>
              </InputAdornment>
            ),
          }}
           required={true}
           type="text"
           fullWidth
           id="firstname"
           name="firstname"
           className="form-input"
           label="First Name"
           margin-right='20px'
           variant="outlined"
           value={values.firstname}
           onChange={handleChange} 
           error={ErrorsFlag.First}/>
          <Typography variant="caption">
          {errors.firstname && <p style={{color:'red'}}>{errors.firstname}</p>}
          </Typography>
      </Grid>  
        
        
        
      <Grid item xs={12} sm={6}>
          <label htmlFor="lastname" className="form-label">
          
          </label>
          
          <TextField 
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <AccountCircleIcon/>
              </InputAdornment>
            ),
          }}
          fullWidth
          required={true}
          type="text"
          id="lastname"
          variant="outlined"
          name="lastname"
          
          label="Last Name"
          value={values.lastname}
          onChange={handleChange}
          error={ErrorsFlag.Last}/>
          
          <Typography variant='caption'>
          {errors.lastname && <p  style={{color:'red'}}>{errors.lastname}</p>}
          </Typography>
      </Grid>
        
        
      </Grid>
        <Grid item xs={12}>
        
          <label htmlFor="username" className="form-label">
          
          </label>
          
          <TextField
           InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <AccountCircleIcon/>
              </InputAdornment>
            ),
          }}
          required={true}
          id="username"
          fullWidth
          style={{marginTop:'20px'}}
          type="text"
          name="username"
          variant="outlined"
          label="Username"
          value={values.username}
          onChange={handleChange}
          error={ErrorsFlag.Username}/>
          
          <Typography variant='caption'>
          {errors.username && <p  style={{color:'red'}}>{errors.username}</p>}
          </Typography>
        
        </Grid> 
        
        <Grid container spacing={2}>  
        <Grid item xs={12} sm={6}>
          <label htmlFor="phone" className="form-label">
          </label>
          
          <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <PhoneAndroidIcon/>
              </InputAdornment>
            ),
          }}
           required={true}
            type="tel"
            id="phone"
            variant="outlined"
            name="phone"
            style={{marginTop:'20px'}}
            className="form-input"
            label="PhoneNumber"
            value={values.phone}
            onChange={handleChange}
            error={ErrorsFlag.Phone}/>
          
          <Typography variant='caption'>
          {errors.phone && <p  style={{color:'red'}}>{errors.phone}</p>}
          </Typography>
          </Grid>
        
          <Grid item xs={12} sm={6}>
          <label htmlFor="age" className="form-label">
            
          </label>
          
          <TextField
          required={true}
          type="number"
          id="age"
          name="age"
          style={{marginTop:'20px'}}
          className="form-input"
          variant="outlined"
          label="Enter your Age"
          value={values.age}
          onChange={handleChange}
          error={ErrorsFlag.Age}
          />
          
          <Typography variant="caption">
          {errors.age && <p  style={{color:'red'}}>{errors.age}</p>}
          </Typography>
        </Grid>
        </Grid>
        
        <Grid container spacing={2}>  
        <Grid item xs={12} sm={6}> 
          <label htmlFor="gender" className="form-label">
            

          </label>
          
          <InputLabel  style={{marginTop:'20px'}}>Gender</InputLabel>
          <Select
          native
          id="gender"
          name="gender"
          fullWidth
          variant="outlined"
          value={values.gender}
          onChange={handleChange}
          error={ErrorsFlag.Gender}
         >
            <option default>Prefer not to specify</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
          <Typography variant="caption">
          {errors.gender && <p  style={{color:'red'}}>{errors.gender}</p>}
          </Typography>
        </Grid> 

        <Grid item xs={12} sm={6}> 
          <label htmlFor="blood_group" className="form-label">
            

          </label>
          
          <InputLabel  style={{marginTop:'20px'}}>Blood Group</InputLabel>
          <Select
          native
          id="blood_group"
          name="blood_group"
          fullWidth
          variant="outlined"
          value={values.blood_group}
          error={ErrorsFlag.Blood_group}
          onChange={handleChange}
         >
            <option default>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
          </Select>
          <Typography variant="caption">
          {errors.blood_group && <p  style={{color:'red'}}>{errors.blood_group}</p>}
          </Typography>
        </Grid> 
            
          


        {/* <Grid item xs={12} sm={6}> 
       
          <label htmlFor="dateOfBirth" className="form-label">
            
          </label>
          
          <InputLabel  style={{marginTop:'20px'}} >Date of Birth</InputLabel>
          <TextField
          
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          fullWidth
          value={values.dateOfBirth}
          onChange={handleChange}/>
          
          
          {errors.dateOfBirth && <p  style={{color:'red'}}>{errors.dateOfBirth}</p>}
        </Grid>  */}
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="primaryAddress" className="form-label">
           
          </label>
          
          <TextField
           InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <HomeIcon/>
              </InputAdornment>
            ),
          }}
          required={true}
          fullWidth
          variant="outlined"
          style={{marginTop:'20px'}}
          multiline={true}
          rows={1}
          type="text"
          id="primaryAddress"
          name="primaryAddress"
          
          label="Primary Address"
          value={values.primaryAddress}
          onChange={handleChange}
          error={ErrorsFlag.PrimaryAddress}/>
          
          <Typography variant="caption">
          {errors.primaryAddress && <p style={{color:'red'}}>{errors.primaryAddress}</p>}
          </Typography>
        </Grid>
        {/* <Grid item xs={12}>
        
          
          <label htmlFor="role" className="form-label">
             
          </label> 
          
            <InputLabel style={{marginTop:'20px'}}>User Role</InputLabel>
            <Select
            
            error={ErrorsFlag.Role}
            native
            id="role"
            name="role"
            className="form-input"
            value={values.role}
            onChange={handleChange}>
            <option default>Member</option>
            <option>Student</option>
            <option>Mentor</option>
            <option>Volunteer</option>
            <option>Parent</option>
            
            

            </Select>
          
            
          
          
          <Typography variant='caption'>
          {errors.role && <p  style={{color:'red'}}>{errors.role}</p>}
          </Typography>
        
        </Grid> */}
        <Grid item xs={12}>
          <label htmlFor="Aadhar_no" className="form-label">
            
          </label>
          
          <TextField
           InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <FingerPrint/>
              </InputAdornment>
            ),
          }}
           fullWidth
           variant="outlined"
           style={{marginTop:'20px'}}
           type="text"
           id="Aadhar_no"
           name="Aadhar_no"
           label="Enter your Aadhar Number"
           value={values.Aadhar_no}
           required={true}
           error={ErrorsFlag.Aadhar_no}
           onChange={handleChange}/>
          <Typography variant='caption'>
          {errors.Aadhar_no && <p  style={{color:'red'}}>{errors.Aadhar_no}</p>}
          </Typography>
        </Grid>
        
        
        {/* <Grid item xs={12}>
          <label htmlFor="companyAddress" className="form-label">
           
          </label>
          
          <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
               <SchoolIcon/>
              </InputAdornment>
            ),
          }}
          type="text"
          id="companyAddress"
          name="companyAddress"
          className="form-input"
          label="Instituition Address"
          error={ErrorsFlag.CompanyAddress}
          multiline={true}
          fullWidth
          style={{marginTop:'20px'}}
          rows={3}
          required={true}
          value={values.companyAddress}
          onChange={handleChange}/>
          
          
          <Typography variant='caption'>
          {errors.companyAddress && <p  style={{color:'red'}}>{errors.companyAddress}</p>}
          </Typography>
        </Grid> */}
        
        <Grid item xs={12}>
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
           required={true}
           fullWidth
           variant="outlined"
           style={{marginTop:'20px'}}
           id="password"
           type="password"
           name="password"
           className="form-input"
           label="Password"
           value={values.password}
           onChange={handleChange}
           error={ErrorsFlag.Password1}/>
           
           <Typography variant='caption'>
           {errors.password && <p  style={{color:'red'}}>{errors.password}</p>}
           </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <label htmlFor="password2" className="form-label">
            
          </label>
          
          <TextField
           InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VpnKeyIcon/>
              </InputAdornment>
            ),
          }} 
          required={true}
          id="password2"
          fullWidth
          variant="outlined"
          style={{marginTop:'20px'}}
          type="password"
          name="password2"
          className="form-input"
          label="Confirm Password"
          value={values.password2}
          onChange={handleChange}
          error={ErrorsFlag.Password2}/>
          
          <Typography variant='caption'>
          {errors.password2 && <p  style={{color:'red'}}>{errors.password2}</p>}
          </Typography>
        </Grid>
        <Button
            type="submit"
            // fullWidth
            style={{marginTop:'20px',backgroundColor:'green'}}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
       
        <br/>
        <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
        </Grid>
        
      </form>
    </div>
    </Container>
  );
};

export default FormSignup;

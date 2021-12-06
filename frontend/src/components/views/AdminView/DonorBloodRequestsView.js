import React, { useEffect, useState } from "react";
// import useForm from "./useForm";
import { Avatar } from "@material-ui/core";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FingerPrint from "@material-ui/icons/Fingerprint";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { InputAdornment } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validate from "./validateDonorRequest";
import { Button, Select, TextField, Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import "../../PatientSignUpPageComponents/Form.css";
import { makeStyles } from "@material-ui/styles";
import axios from "../../axios";


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
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const useForm = (callback, validate) => {
  const [errors, setErrors] = useState({});
  const [ErrorsFlag, setErrorsFlag] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    unit:"0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsFlag(validate(values).errorsFlag);
    setErrors(validate(values).errors);
    setIsSubmitting(true);

  };

useEffect(() => {
    if (isSubmitting) {
      console.log(values);
      let tosendval = {
        fname: values.firstname,
        lname: values.lastname,
        donorID:localStorage.getItem("roleID"),
        age: values.age,
        unit: values.unit,
      };
      console.log("tosendval");
      async function sendReq() {
        await axios
          .post("/requestfordonation", tosendval)
          .then((res) => {
            console.log("res.data");
            if (res.status === 201) {
              console.log(res.data);
              alert(res.data.msg);
              window.location.reload(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      sendReq();
      setIsSubmitting(false);
      //callback();
    }
  }, [errors, isSubmitting,callback, values]);
  return { handleChange, values, handleSubmit, errors, ErrorsFlag };
};


const DonorBloodRequestsView = ({submitForm}) => {
  const classes =useStyles();
  
  const { handleChange, values, handleSubmit, errors,ErrorsFlag} = useForm(submitForm,validate);

  return (
    <Container component="main" maxWidth="xs" >
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
       <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Request for Donation
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
      <Grid container spacing={2}>
        
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
         
        
        <Grid item xs={12} sm={6}>
          <label htmlFor="unit" className="form-label">
            
          </label>
          
          <TextField
          required={true}
          type="number"
          id="unit"
          name="unit"
          style={{marginTop:'20px'}}
          className="form-input"
          variant="outlined"
          label="Enter number of units"
          value={values.unit}
          onChange={handleChange}
          error={ErrorsFlag.unit}
          />
          {/* <Typography variant="caption">
          {errors.age && <p  style={{color:'red'}}>{errors.unit}</p>}
          </Typography> */}

        </Grid>
        </Grid>
        <Button
            type="submit"
            // fullWidth
            style={{marginTop:'20px',backgroundColor:'green'}}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Request
          </Button>
        <br/>
      </form>
    </div>
    </Container>
  );
};

export default DonorBloodRequestsView;

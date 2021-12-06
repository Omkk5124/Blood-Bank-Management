import { useState, useEffect } from "react";
import axios from "../axios";


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  //   userrole: "",
  // });
  const [errors, setErrors] = useState({});
  const [ErrorsFlag, setErrorsFlag] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setErrors(validate(values).errors);
    setErrorsFlag(validate(values).errorFlags);

    setIsSubmitting(true);
  };
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        //console.log(values);
        async function sendReq(){
          await axios.post('/login',values)
          .then(res=>{
            if(res.status===201){
              console.log(res.data);
              localStorage.setItem("username",values.username);
              //localStorage.setItem("token",res.data.token);
              //localStorage.setItem("role",JSON.parse(res.data.token).role);
              callback();
              window.location.href="/dashboard";
              setIsSubmitting(false);
            }
            })
          .catch(err=>{
            
            if(err.response.status===404){
              setErrors({username:"User does not exists"});
              setErrorsFlag({errorFlagUsername:true});
            } else if(err.response.status===401){
              setErrors({password:"Incorrect password ! Please Try Again"});
              setErrorsFlag({errorFlagPassword:true});
            }
            
          
          console.log(err);});
              
        }
        sendReq();
        
        //callback();
      }
    },
    [errors,isSubmitting,callback,values]
  )
  

  return { handleChange, values, handleSubmit, errors,ErrorsFlag};
};
export default useForm;

// import { Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import FormSuccess from "./FormSuccess";
import FormLogin from "./FormLogin"
import "./Form.css";
import { Redirect } from "react-router-dom";
//import axios from "../axios";

const Login = () => {
const [isSubmitted, setIsSubmitted] = useState(false);
const [isRedirect,setIsRedirect] = useState(false);

function submitForm() {
  setIsSubmitted(true);
}

 useEffect(() => {
  //const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  //  async function toRedirect(){
  //   await (axios.post('/AUTHENTICATE',{token: token}))
  //   .then(res=>{
  //     if(res.status===200){
  //       setIsRedirect(true);
  //     }
  //   });
  //  }
   if(username){
     setIsRedirect(true);
   }
   
   //toRedirect();
   
 }, []);


  return (
    <>
    <>
    {isRedirect ? 
      <Redirect to="/dashboard"/>:
       <>{!isSubmitted ? (
        <div>
          {/* <Typography gutterBottom={true} variant="h2" color="primary">
            Login
          </Typography> */}
          <>
          
          <div className="form-container">
               <FormLogin submitForm={submitForm} /> 
            </div>
          </>
        </div>
      ) : (
        
         <FormSuccess />
         
      )} </>
      
    }
      
    </>
    
    </>
  );

  
};

export default Login;
// import { Typography } from "@material-ui/core";
// import React from "react";
// import Form from "./Form";
// const Login = () => {
//   return (
//     <div>
//      <Typography gutterBottom={true} variant="h2" color="primary">
//       Login
      
//       </Typography>
      
//       <Form />
//     </div>
//   );
// };

// export default Login;
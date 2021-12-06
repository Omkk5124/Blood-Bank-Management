import React, { useState, useEffect } from "react";
//import axios from "../axios";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

import { Redirect } from "react-router-dom";
import Preloader from "../PreLoader";


const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRedirect, setisRedirect] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  useEffect(() => {
    //const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    // async function checkAuth(){
    //   await axios.post('/AUTHENTICATE',{token:token})
    //   .then(res=>{
    //     if(res.status===200){
    //       setisRedirect(true);
    //     }
    //   });
    // }
    if (username) {
      console.log(true);
      setisRedirect(true);
      //checkAuth();
    }
  }, []);

  

  return (
    <>
      {isRedirect ? (
        <Redirect to="/login" />
      ) : (
        <>
          {!isSubmitted ? (
            <>
              <div>
                {/* <Typography gutterBottom={true} variant="h2" color="primary">
                  Signup
                </Typography> */}
                <FormSignup submitForm={submitForm} />
              </div>
            </>
          ) : (<>
            <FormSuccess />
            <Preloader/>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Signup;

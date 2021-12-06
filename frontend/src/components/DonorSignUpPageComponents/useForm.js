import { useState, useEffect } from "react";
import axios from "../axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username:"",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    password2: "",
    disease:"",
    age: "",
    gender: "Prefer not to specify",
    primaryAddress: "",
    blood_group: "Select Blood Group",
    Aadhar_no: "",
  });

  // const [errors, setErrors] = useState({
  //   firstname: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  //   role: "",
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
    setErrorsFlag(validate(values).errorsFlag);
    setErrors(validate(values).errors);
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      
      let tosendval = {
        username:values.username,
        fname: values.firstname,
        lname: values.lastname,
        mobile_no: values.phone,
        password: values.password,
        age: values.age,
        gender: values.gender.slice(0),
        disease:values.disease,
        address: values.primaryAddress,
        blood_group: values.blood_group,
        Aadhar_no: values.Aadhar_no
      };
      if(values.gender==="Prefer not to specify"){
        tosendval={...values,gender : "NA"};
      }else if(values.gender==="Male"){
        tosendval={...values,gender : "M"};
      }else{
        tosendval={...values,gender : "F"};
      }
      console.log(tosendval);
      async function sendReq() {
        await axios
          .post("/donor-signup", tosendval)
          .then((res) => {
            if (res.status === 201) {
              //console.log(res.data);
              //localStorage.setItem("token",res.data.token);
              callback();
              alert(res.data.msg);
              window.location.href = "/login";
            }
          })
          .catch((err) => {
            if (err.response.status === 409) {
              setErrors({ username: "Username already exists" });
            }
            console.log(err);
          });
      }
      sendReq();
      setIsSubmitting(false);

      //callback();
    }
  }, [errors, isSubmitting, callback, values]);

  return { handleChange, values, handleSubmit, errors, ErrorsFlag };
};
export default useForm;

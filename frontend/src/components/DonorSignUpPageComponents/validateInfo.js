import { integerPropType } from "@material-ui/utils";

export default function validateInfo(values) {
  let errors = {};
  let errorsFlag={};

  if (!values.username.trim()) {
    errors.username = "UserName required";
    errorsFlag.Username=true;
  }

  if (!values.firstname.trim()) {
    errors.firstname = "First Name required";
    errorsFlag.First=true;
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Last Name required";
    errorsFlag.Last=true;
  }
  if (!values.primaryAddress.trim()) {
    errors.primaryAddress = "Primary Address required";
    errorsFlag.PrimaryAddress=true;
  }
  if (!values.Aadhar_no.trim()) {
    errors.Aadhar_no = "Aadhar Number Required";
    errorsFlag.Aadhar_no=true;
  } else if(values.Aadhar_no.length !==12){
    errors.Aadhar_no = "Aadhar Number Should be of 12 digits";
    errorsFlag.Aadhar_no=true;
  }

  //Email
  // if (!values.email) {
  //   errors.email = "Email required";
  //   errorsFlag.Email=true;
  // } else if (
  //   !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
  //     values.email
  //   )
  // ) {
  //   errors.email = "Email address is invalid";
  //   errorsFlag.Email=true;
  // }

  if (!values.phone.trim()) {
    errors.phone = "Phone Number required";
    errorsFlag.Phone=true;
  }
  if (!values.age.trim()) {
    errors.age = "Age required";
    errorsFlag.Age=true
  }
  
  

  //age validation
  try
  {
    const age = parseInt(values.age);
    if(age<0||age>50)
      throw -1;
  }
  catch(err)
  {
    errors.age = "Please Enter valid age";
    errorsFlag.Age=true
  }


  if (values.blood_group === "Select Blood Group" || !values.blood_group.trim()) {
    errors.blood_group = "Blood Group required";
    errorsFlag.Blood_group=true;
  }

  // if (values.gender === "Prefer not to specify" || !values.gender.trim()) {
  //   errors.gender = "Gender required";
  //   errorsFlag.Gender=true;
  // }

  if (!values.password) {
    errors.password = "Password required";
    errorsFlag.Password1=true;
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters long";
    errorsFlag.Password1=true;
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
      values.password
    )
  ) {
    errorsFlag.Password1=true;
    errors.password =
      "Password must contain - at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
  } else {
    if (!values.password2) {
      errors.password2 = "Password is required";
      errorsFlag.Password2=true;
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
      errorsFlag.Password2=true;
    }
  }

  // if (errors === undefined || Object.keys(errors).length === 0) {
  //   // pass request to backend
  //   console.log(values);
  //   console.log("Success");
    

  // } else {
  //   console.log(errors);
    
  // }
  return {errors,errorsFlag};
}

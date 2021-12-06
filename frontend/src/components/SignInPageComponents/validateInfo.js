export default function validateInfo(values) {
  let errors = {};
  let errorFlags={};


  if (!values.username.trim()) {
    errors.username = "Username required";
    errorFlags.errorFlagUsername=true;
  }

  //Email
  // if (!values.email) {
  //   errors.email = "Email required";
  //   errorFlags.errorFlagEmail=true;
  // } else if (
  //   !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
  //     values.email
  //   )
  // ) {
  //   errors.email = "Email address is invalid";
  //   errorFlags.errorFlagEmail=true;

  // }
  // if (values.userrole == "Select Role" || !values.userrole.trim()) {
  //   errors.userrole = "Role required";
  // }

  if (!values.password) {
    errors.password = "Password required";
    errorFlags.errorFlagPassword=true; 
  } 

  // if (errors === undefined || Object.keys(errors).length === 0) {
  //   // pass request to backend
  //   console.log(values);
  //   console.log("Success");

  // } else {
  //   console.log(errors);
  // }
  return {errors,errorFlags};
}

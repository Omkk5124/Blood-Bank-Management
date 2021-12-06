import { integerPropType } from "@material-ui/utils";

export default function validateInfo(values) {
  let errors = {};
  let errorsFlag={};

  if (!values.firstname.trim()) {
    errors.firstname = "First Name required";
    errorsFlag.First=true;
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Last Name required";
    errorsFlag.Last=true;
  }

  if (!values.age.trim()) {
    errors.age = "Age required";
    errorsFlag.Age=true
  }

  if (!values.unit.trim()) {
    errors.unit = "Units required";
    errorsFlag.Unit=true
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


  return {errors,errorsFlag};
}

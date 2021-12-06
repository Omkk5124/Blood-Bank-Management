import axios from "../../axios";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";

const DonorRequestHistory = () => {
   const[data,setdata]=useState([]);
    useEffect(() => {
    axios
      .post("/getDonorHistory",{donorID : localStorage.getItem("roleID")})
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const patientTab = data.map((patient)=>{
    // console.log(localStorage.getItem("roleID"));
    if(patient.donorID==localStorage.getItem("roleID")){
      return(
      <tbody>
        <tr>
          <td>
            {patient.fname + " " +patient.lname}
          </td>
          <td>
            {patient.blood_group}
          </td>
          <td>
            {dateFormat(patient.date_of_donation,"mmmm dS, yyyy hh:mm")}
          </td>
          <td>
            {patient.age}
          </td>
          <td>
            {patient.unit}
          </td>
          <td>
            {patient.status}
          </td>
        </tr>
        </tbody>)
    }
    else{
      return(
        <div>
          No Data Found
        </div>
      )
    }
    
      });

    return(
      <div>
      <div className="container">
        <h4 className="text-center" style={{margin:"20px"}}>DONOR REQUEST HISTORY</h4>
        <br />
        <table className="table table-light table-hover table-bordered table-striped">
        <thead className="bg-info">
          <tr>
            <th scope="col">Name</th>
            {/* <th scope="col">Profile</th> */}
            <th scope="col">Blood Group</th>
            <th scope="col">Date of Request</th>
            <th scope="col">Age</th>
            <th scope="col">Unit</th>
            <th scope="col">Status</th>
            
            {/* <th className="text-right">Action</th> */}

          </tr>
        </thead>
        {patientTab}
        </table> 
      </div>
    </div>
    )
        // return(
        //     <div>Donor history</div>
        // )
}

export default DonorRequestHistory;
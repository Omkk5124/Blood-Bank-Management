import axios from "../../axios";
import React, { useEffect, useState } from "react";

const AdminBloodRequestView = () => {
  const [bloodrequests, setBloodrequests] = useState([]);
  useEffect(() => {
    axios
      .get("/getAllBloodRequest")
      .then((res) => {
        console.log(res.data);
        setBloodrequests(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (userID,unit,requestID) => {
    console.log(userID);
    axios
      .post("/approverequestbyadmin", { patientID: userID,unit:unit,requestID:requestID })
      .then((res) => {
        if (res.status === 201) {
          window.location.reload();
        }
      })
      .catch((err) => {console.log(err);
        if(err.response.status===409){
            alert("Insufficient Stock");
        }});
  }; 

  const handleDeny = (userID,requestID) => {
    console.log(userID);
    axios
      .post("/rejectrequestbyadmin", { patientID: userID,requestID:requestID })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const actionTab = (bloodrequests) => {
    console.log("inside")
  if (bloodrequests.status === "pending") {
    return (
      <td className="text-right">
        <button
        onClick={(e)=>{
            e.preventDefault();
            handleApprove(`${bloodrequests.patientID}`,bloodrequests.unit,bloodrequests.requestID);
        }}
        value={bloodrequests.patientID}
          className="btn btn-primary badge-pill"
          style={{ width: 100 }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href
          >
            APPROVE
          </a> 
        </button>
        <button 
        onClick={(e)=>{
            e.preventDefault();
            handleDeny(`${bloodrequests.patientID}`,bloodrequests.requestID);
        }}
        value={bloodrequests.patientID}
          className="btn btn-danger badge-pill"
          style={{ width: 80 }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href
          >
            REJECT
          </a> 
        </button>
      </td>
    );
  } 
//   else if (bloodrequests.status === "approved") {
//       return (
//         <td>
//           <span className="label warning">
//             {bloodrequests.unit} Unit Deducted from Stock
//           </span>
//         </td>
//       );
//     } else if (bloodrequests.status === "rejected") {
//       return (
//         <td>
//           <span className="label danger">0 Unit Deducted from Stock</span>
//         </td>
//       );
//     }
//     else{
//         return <>Problem</>
//     }
}
  const AllRequestTab = bloodrequests.map((bloodrequests) => {
      if(bloodrequests.status ==='pending'){
    return (
      <tbody>
        <tr>
          <td>{bloodrequests.fname + " " + bloodrequests.lname}</td>
          <td>{bloodrequests.reason}</td>
          <td>{bloodrequests.age}</td>
          <td>{bloodrequests.blood_group}</td>
          <td>{bloodrequests.unit}</td>
          <td>{`${bloodrequests.date_of_request}`.slice(0, 10)}</td>
          <td>{bloodrequests.status}</td>
          {actionTab(bloodrequests)}
        </tr>
      </tbody>
    );}
  });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .label {\n     color: white;\n     padding: 8px;\n   }\n   \n   .success {background-color: #4CAF50;} /* Green */\n   .info {background-color: #2196F3;} /* Blue */\n   .warning {background-color: #ff9800;} /* Orange */\n   .danger {background-color: #f44336;} /* Red */\n   .other {background-color: #e7e7e7; color: black;} /* Gray */\n    ",
        }}
      />
      <br />
      <br />
      <div className="container">
        <h4 className="text-center">BLOOD REQUESTED</h4>
        <br />

        <table className="table table-light table-hover table-bordered table-striped">
          <thead className="bg-info">
            <tr>
              <th scope="col">Patient Name</th>
              <th scope="col">Reason</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Unit</th>
              <th scope="col">Request Date</th>
              <th scope="col">Status</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          {AllRequestTab}
        </table>
      </div>
    </>
  );
};

export default AdminBloodRequestView;

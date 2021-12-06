import axios from "../../axios";
import React, { useEffect, useState } from "react";

const AdminDonationView = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios
      .get("/getDonations")
      .then((res) => {
        console.log(res.data);
        setDonations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (userID,unit,donationID) => {
    console.log(userID);
    axios
      .post("/approvedonationbyadmin", { donorID: userID,unit:unit,donationID:donationID })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }; 

  const handleDeny = (userID,donationID) => {
    console.log(userID);
    axios
      .post("/rejectdonationbyadmin", { donorID: userID,donationID:donationID })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const actionTab = (donation) => {
    console.log("inside")
  if (donation.status === "pending") {
    return (
      <td className="text-right">
        <button
        onClick={(e)=>{
            e.preventDefault();
            handleApprove(`${donation.donorID}`,donation.unit,donation.donationID);
        }}
        value={donation.donorID}
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
            handleDeny(`${donation.donorID}`,donation.donationID);
        }}
        value={donation.donorID}
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
  } else if (donation.status === "approved") {
      return (
        <td>
          <span className="label warning">
            {donation.unit} Unit Added To Stock
          </span>
        </td>
      );
    } else if (donation.status === "rejected") {
      return (
        <td>
          <span className="label danger">0 Unit Added To Stock</span>
        </td>
      );
    }
    else{
        return <>Problem</>
    }
}
  const DonationTab = donations.map((donation) => {
    return (
      <tbody>
        <tr>
          <td>{donation.fname + " " + donation.lname}</td>
          <td>{donation.disease}</td>
          <td>{donation.age}</td>
          <td>{donation.blood_group}</td>
          <td>{donation.unit}</td>
          <td>{`${donation.date_of_donation}`.slice(0, 10)}</td>
          <td>{donation.status}</td>
          {actionTab(donation)}
        </tr>
      </tbody>
    );
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
        <h4 className="text-center">BLOOD DONATION DETAILS</h4>
        <br />

        <table className="table table-light table-hover table-bordered table-striped">
          <thead className="bg-info">
            <tr>
              <th scope="col">Donor Name</th>
              <th scope="col">Disease</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Unit</th>
              <th scope="col">Request Date</th>
              <th scope="col">Status</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          {DonationTab}
        </table>
      </div>
    </>
  );
};

export default AdminDonationView;

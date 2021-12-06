import axios from "../../axios";
import React, { useEffect, useState } from "react";
 
const AdminDonorView = () => {
    const [donors,setDonors] = useState([]);
    useEffect(() => {
        axios.get('/getDonors')
        .then(res=>{
            console.log(res.data);
            setDonors(res.data);
        })
        .catch(err=>console.log(err));
    }, [])

    const handleDelete=(userID)=>{
        
        console.log(userID);
        axios.post('/deletebyadmin',{userID : userID})
        .then(res=>{
            if(res.status===200){
                
                window.location.reload();
            }

        })
        .catch(err=>console.log(err));
    }

    const donorTab = donors.map((donor)=>{
        return(<tbody>
            <tr>
              <td>
                {donor.fname + " " +donor.lname}
              </td>
              <td>
                {donor.blood_group}
              </td>
              <td>
                {donor.address}
              </td>
              <td>
                {donor.mobile_no}
              </td>
              <td>
                {donor.age}
              </td>
              <td>
                {donor.gender}
              </td>
              <td>
                {donor.Aadhar_no}
              </td>
              <td>
                {donor.disease}
              </td>
              <td className="text-right">
                {/* <button
                  className="btn btn-primary badge-pill"
                  style={{ width: 80 }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="{% url 'update-donor' t.id  %}"
                  >
                    EDIT
                  </a>{" "}
                </button> */}
                <button
                onClick={(e)=>{
                    e.preventDefault();
                    handleDelete(`${donor.userID}`);
                }}
                value={donor.userID}
                  className="btn btn-danger badge-pill"
                  style={{ width: 80 }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href
                  >
                    DELETE
                  </a>
                </button>
              </td>
            </tr>
          </tbody>)
    })


  return (
    <div>
      <div className="container">
        <h4 className="text-center">DONOR DETAILS</h4>
        <br />
        <table className="table table-light table-hover table-bordered table-striped">
          <thead className="bg-info">
            <tr>
              <th scope="col">Name</th>
              {/* <th scope="col">Profile</th> */}
              <th scope="col">Blood Group</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Aadhar No</th>
              <th scope="col">Disease</th>
              <th className="text-right">Action</th>

            </tr>
          </thead>
          {donorTab}
         
        </table>
      </div>
    </div>
  );
};

export default AdminDonorView;

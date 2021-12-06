import axios from "../../axios";
import React, { useEffect, useState } from "react";
 
const AdminPatientView = () => {
    const [patients,setPatients] = useState([]);
    useEffect(() => {
        axios.get('/getPatients')
        .then(res=>{
            console.log(res.data);
            setPatients(res.data);
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

    const patientTab = patients.map((patient)=>{
        return(<tbody>
            <tr>
              <td>
                {patient.fname + " " +patient.lname}
              </td>
              <td>
                {patient.blood_group}
              </td>
              <td>
                {patient.address}
              </td>
              <td>
                {patient.mobile_no}
              </td>
              <td>
                {patient.age}
              </td>
              <td>
                {patient.gender}
              </td>
              <td>
                {patient.Aadhar_no}
              </td>
              
              <td className="text-right">
                {/* <button
                  className="btn btn-primary badge-pill"
                  style={{ width: 80 }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="{% url 'update-patient' t.id  %}"
                  >
                    EDIT
                  </a>{" "}
                </button> */}
                <button
                onClick={(e)=>{
                    e.preventDefault();
                    handleDelete(`${patient.userID}`);
                }}
                value={patient.userID}
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
        <h4 className="text-center">PATIENT DETAILS</h4>
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
              
              <th className="text-right">Action</th>

            </tr>
          </thead>
          {patientTab}
         
        </table>
      </div>
    </div>
  );
};

export default AdminPatientView;

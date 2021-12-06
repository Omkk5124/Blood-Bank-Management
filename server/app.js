const express = require("express");
var bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require('cors');

// Create connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  multipleStatements: true,
  database: "bloodbankdbver1",
});

//connect

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("mysql connected");
});

const app = express();
app.use(cors());
app.use(express.json());

// sign in

app.post('/login',(req,res)=>{
  console.log(req.body);
  let sql = `CALL check_user('${req.body.username}', '${req.body.password}', @status)`;
  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
    }
    
    result = result[0][0];
    // console.log(result);
    if(result["status_code"] === 404){
      
      res.status(404).json({msg:"User does not exist"});
    }else if(result["status_code"] === 401){
    
      res.status(401).json({msg:"Password Incorrect"});
    }else if(result["status_code"] === 201){
      res.status(201).json({msg:"user logged in"});
    }
  })


});

app.post('/patient-signup',(req,res)=>{
  //console.log(req.body);
  let user = {
    userID : req.body.username,
    password : req.body.password,
    fname: req.body.firstname,
    lname: req.body.lastname,
    mobile_no: req.body.phone,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.primaryAddress.slice(0,16),
    blood_group: req.body.blood_group,
    aadhar_no: req.body.Aadhar_no,
    disease : "NA"
  }
  let sql = `select userID from usertable where userID = '${user.userID}'`;
  let sql1 = `call insert_into_table('${user.userID}','${user.fname}','${user.lname}','${user.mobile_no}','${user.password}',${user.age},'${user.gender}','${user.address}','${user.blood_group}','${user.aadhar_no}','${user.disease}','patient');`;
  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
      
    }
    if(result.length ===0){
      //console.log("all set for inserting the record");
      let query1 = db.query(sql1,(err,result1)=>{
        if (err){
          console.log(err); 
        }
        console.log("patient created with row ");
        res.status(201).json({msg:"user registered successfully"});
      })
    }else{
      res.status(409).json({msg:"username not available"});
    }
    
  });

});

app.post('/donor-signup',(req,res)=>{
  //console.log(req.body);
  let user = {
    userID : req.body.username,
    password : req.body.password,
    fname: req.body.firstname,
    lname: req.body.lastname,
    mobile_no: req.body.phone,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.primaryAddress.slice(0,16),
    blood_group: req.body.blood_group,
    aadhar_no: req.body.Aadhar_no,
    disease : req.body.disease
  }
  let sql = `select userID from usertable where userID = '${user.userID}'`;
  let sql1 = `call insert_into_table('${user.userID}','${user.fname}','${user.lname}','${user.mobile_no}','${user.password}',${user.age},'${user.gender}','${user.address}','${user.blood_group}','${user.aadhar_no}','${user.disease}','donor');`;
  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
      
    }
    if(result.length ===0){
      console.log("all set for inserting the record");
      let query1 = db.query(sql1,(err,result)=>{
        if (err){
          console.log(err); 
        }
        console.log("donor created with rowpacket ");
        res.status(201).json({msg:"user registered successfully"});
      })
    }else{
      res.status(409).json({msg:"username not available"});
    }
    
  });


});



app.post('/getUserInfo',(req,res)=>{
  
  console.log(req.body);
  let sql = `CALL get_user('${req.body.username}', @role, @ID)`;

  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
      
    }
    console.log(result);
    result = result[0][0];
    if(result["role"] === null){
      
      res.status(404).json({msg:"User does not exist"});
    }else{
    
    res.status(200).json({role : result["role"],roleID : result["ID"]});
    }
  })

});


//get blood stock

app.get("/getStock", (req, res) => {
  //console.log(req.body);

  let sql = "select * from stock";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    let stock={};
    //console.log(result[1]["blood_group"]);
    for(let i=0;i<result.length;i++){
      stock[result[i]["blood_group"]] = result[i]["blood_unit"];
    }
    //console.log(stock);
    res.status(200).json(stock);
    
    
  }); 
});

//update blood stock

app.post("/updateStock", (req, res) => {
  console.log(req.body);

  let sql = `update stock set blood_unit = ${req.body.unit} where blood_group = '${req.body.bloodgrp}'`;
  //console.log(sql);

  db.query(sql,(err,result)=>{
      if(err) console.log(err);
      //console.log(result);
      res.send('value updated....');
  })
});


//get Stats

app.get("/getStats", (req, res) => {
  //console.log(req.body);

  let sql = "CALL getStats()";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result[0][0]);
    res.status(200).json(result[0][0]);
    
    
  });  
});


app.get("/getDonors", (req, res) => {
  //console.log(req.body);

  let sql = "SELECT * from donor";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });  
});

app.get("/getPatients", (req, res) => {
  //console.log(req.body);

  let sql = "SELECT * from patient";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });  
});


app.get("/getDonations", (req, res) => {
  //console.log(req.body);

  let sql = "SELECT fname,lname,donor.donorID,blood_group,age,disease,unit,donationID,date_of_donation,status from donor INNER join blood_donate ON donor.donorID = blood_donate.donorID;";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });  
}); 


app.post("/deletebyadmin/", (req, res) => {
  console.log(req.body);

  let sql = `Delete from usertable where userID = '${req.body.userID}' `;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });  
});

app.post("/approvedonationbyadmin", (req, res) => {
  console.log(req.body);

  let sql = `CALL approveDonation(${req.body.donorID},${req.body.unit},${req.body.donationID}) `;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });    
});

app.post("/rejectdonationbyadmin", (req, res) => {
  console.log(req.body);

  let sql = `UPDATE blood_donate set status = "rejected" WHERE donationID = ${req.body.donationID} `;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });  
});


app.get("/getAllBloodRequest", (req, res) => {
  //console.log(req.body);

  let sql = "SELECT fname,lname,patient.patientID,blood_group,age,unit,requestID,reason,doctor,date_of_request,status from patient INNER join bloodrequest ON patient.patientID = bloodrequest.patientID;";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
    
    
  });  

}); 


app.post("/getSpecificBloodRequest", (req, res) => {
  console.log(req.body.patientID);

  let sql = `SELECT fname,lname,patient.patientID,blood_group,age,unit,requestID,reason,doctor,date_of_request,status from patient INNER join bloodrequest ON patient.patientID = bloodrequest.patientID where patient.patientID=${req.body.patientID}`;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });  
}); 

app.post("/getDonorHistory", (req, res) => {
  console.log(req.body);

  let sql = `SELECT fname,lname,donor.donorID,blood_group,age,unit,date_of_donation,status from donor INNER join blood_donate ON donor.donorID = blood_donate.donorID where blood_donate.donorID=${req.body.donorID}`;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });  
});




app.post("/approverequestbyadmin", (req, res) => {
  console.log(req.body);

  let sql = `CALL approveRequest(${req.body.patientID},${req.body.unit},${req.body.requestID}) `;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result[0][0].statusmsg);
    if(result[0][0].statusmsg===201){
      res.status(201).json({msg:"requested approved"});
    }
    else if(result[0][0].statusmsg===409){
      res.status(409).json({msg:"request denied"});
    }   
  });    
});

app.post("/requestforblood", (req, res) => {
  let sql = `CALL request_for_blood('${req.body.patientID}','${req.body.unit}','${req.body.reason}','${req.body.doctor}') `;

  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
    }
    res.status(201).json({msg:"Requested successfully"}); 
  });
});

app.post("/requestfordonation", (req, res) => {
  let sql = `CALL request_for_donation('${req.body.donorID}','${req.body.unit}')`;

  let query = db.query(sql,(err,result)=>{
    if (err){
      console.log(err);
    }
    res.status(201).json({msg:"Requested successfully"}); 
  });
});


app.post("/rejectrequestbyadmin", (req, res) => {
  console.log(req.body);

  let sql = `UPDATE bloodrequest set status = "rejected" WHERE requestID = ${req.body.requestID} `;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });  
});

app.get("/getAllBloodRequestHistory", (req, res) => {
  console.log(req.body);

  let sql = "call get_patientrequest_history();";

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result[0]);
    res.status(200).json(result[0]); 
  });  

}); 



app.listen("3001", () => {
    console.log("Server started at port 3001");
  });
import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import UpdateStock from "./UpdateStock";

const UpdateAndGetStock = () => {
    const [stock, setStock] = useState({
        A1: "-",
        A2: "-",
        B1: "-",
        B2: "-",
        O1: "-",
        O2: "-",
        AB1: "-",
        AB2: "-",
      });
    
      useEffect(() => {
        axios
          .get("/getStock")
          .then((res) => {
            console.log(res.data);
            let stock = {
              A1: res.data['A+'],
              A2: res.data['A-'],
              B1: res.data['B+'],
              B2: res.data['B-'],
              O1: res.data['O+'],
              O2: res.data['O-'],
              AB1: res.data['AB+'],
              AB2: res.data['AB-'],
            };
            setStock(stock);
          })
          .catch((err) => console.log(err));
      }, []);


    return (
        <div>
           <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ADMIN</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n\n\n \n\n    .row{\n        padding: 5px;\n    }\n    .fa-tint{     \n        color: red;    \n    }\n    .blood{\n        float: right;\n    }\n    .fa-users{     \n        color: blue; \n        font-size: 3ex;   \n    }\n    .fa-spinner{     \n        color: blue; \n        font-size: 3ex;   \n    }\n    .fa-check-circle{     \n        color: blue; \n        font-size: 3ex;   \n    }\n    .xyz{     \n        color: blue; \n        font-size: 3ex;   \n    }\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nbody{\n   background-color: #f3f5f9;\n}\n.bg-danger {\n    background-color: #ff0018!important;\n}\n\n.wrapper{\n  display: flex;\n  position: relative;\n}\n\n.wrapper .sidebar{\n  width: 200px;\n  height: 100%;\n  background: \t#343a40;\n  padding: 30px 0px;\n  position: fixed;\n}\n\n.wrapper .sidebar h2{\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.wrapper .sidebar ul li{\n  padding: 15px;\n  border-bottom: 1px solid #bdb8d7;\n  border-bottom: 1px solid rgba(0,0,0,0.05);\n  border-top: 1px solid rgba(255,255,255,0.05);\n}    \n\n.wrapper .sidebar ul li a{\n  color: #bdb8d7;\n  display: block;\n}\n\n.wrapper .sidebar ul li a .fas{\n  width: 25px;\n}\n\n.wrapper .sidebar ul li:hover{\n  background-color: #594f8d;\n}\n    \n.wrapper .sidebar ul li:hover a{\n  color: #fff;\n}\n \n.wrapper .sidebar .social_media{\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n}\n\n.wrapper .sidebar .social_media a{\n  display: block;\n  width: 40px;\n  background: #594f8d;\n  height: 40px;\n  line-height: 45px;\n  text-align: center;\n  margin: 0 5px;\n  color: #bdb8d7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.wrapper .main_content{\n  width: 100%;\n  margin-left: 200px;\n}\n\n.wrapper .main_content .header{\n  padding: 20px;\n  background: #fff;\n  color: #717171;\n  border-bottom: 1px solid #e0e4e8;\n}\n\n.wrapper .main_content .info{\n  margin: 20px;\n  color: #717171;\n  line-height: 25px;\n}\n\n.wrapper .main_content .info div{\n  margin-bottom: 20px;\n}\n\n@media (max-height: 500px){\n  .social_media{\n    display: none !important;\n  }\n}\n.fa-sign-out-alt{\n    color: white;\n    font-size: 2ex;\n}\n\n    ",
          }}
        />
        <br />
        <br />
        <div className="wrapper">
          <div className="main_content" style={{ marginLeft: "0px" }}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n          .xyz{\n      \n      display: table;\n      margin-right: auto;\n      margin-left: auto;\n            }\n",
              }}
            />
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          A+ <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.A1}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          B+ <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.B1}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          O+ <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}> {stock.O1}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          AB+ <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.AB1}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          A- <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.A2}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          B- <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.B2}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          O- <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.O2}</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="blood">
                        <h2>
                          AB- <i className="fas fa-tint" />
                        </h2>
                      </div>
                      <br />
                      <br />
                      <div style={{textAlign:"initial"}}>{stock.AB2}</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <UpdateStock/>
              
            </div>
          </div>
        </div>
      </> 
        </div>
    )
}

export default UpdateAndGetStock

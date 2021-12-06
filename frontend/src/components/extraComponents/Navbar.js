import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import { Box } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
  
// }));

const Navbar = () => {
  //const classes = useStyles();

  return (
    <>
      {/* <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" flexGrow={1}>
              <Typography style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                Blood Bank Management
              </Typography>
            </Box>
            <Typography  className={classes.title}>
              News
            </Typography>
            <div>

            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div> */}
        <div className="bs-example">
    <nav style={{backgroundColor:"#2d2d2d"}} className="navbar navbar-expand-md navbar-dark fixed-top">
      <a href="/" className="navbar-brand"><i className="fas fa-heartbeat"></i>&nbsp; Blood Bank Management</a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">


        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" style={{"color": "white"}} href="/"><i className="fas fa-home"> Home</i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{"color": "white"}} href="/patient/patientlogin"><i className="fas fa-procedures"></i>&nbsp; Patient</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{"color": "white"}} href="/donor/donorlogin"><i className="fas fa-user"></i>&nbsp; Donor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{"color": "white"}} href="/adminlogin"><i className="fas fa-user-shield"></i>&nbsp; Admin</a>
                </li>
                
            </ul>
        </div>




      </div>
    </nav>
  </div>




    </>
  );
};

export default Navbar;

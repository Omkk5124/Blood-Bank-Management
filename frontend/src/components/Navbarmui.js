import { AppBar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  lnk: {
    color: "white",
    textDecoration: "None",
    "&:hover": {
      color: "#ff0010",
      // textDecoration:'underline'
    },
  },

  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  // },
  // appbar:{
  //   color:"#fff",
  //    backgroundColor:"#064e66"
  // }
}));
const NavBarmui = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Typography style={{ fontFamily: "Roboto", fontSize: "20px" }}>
              Blood Bank
            </Typography>
          </Box>

          <div className={classes.btn}>
            <Button color="inherit">
              <Link className={classes.lnk} to="/">
                <i className="fas fa-home" /> &nbsp;HOME
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.lnk} to="/donor-signup">
                <i className="fas fa-user" /> &nbsp;Donor
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.lnk} to="/patient-signup">
                <i className="fas fa-procedures" /> &nbsp;Patient
              </Link>
            </Button>
            {/* <Button color ='inherit'><Link className={classes.lnk} to='/adminlogin'><i className="fas fa-user-shield"/> &nbsp;Admin</Link></Button> */}
          </div>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBarmui;

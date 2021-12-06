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
const NavbarmuiLoggedIn = () => {
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
          <Menu />
          <div className={classes.btn}>
              
            <Button color="inherit">
              <Link className={classes.lnk} to="/logout">
              &nbsp;Logout <i className="fas fa-sign-out-alt" /> 
              </Link>
            </Button>
            
            
            
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarmuiLoggedIn;

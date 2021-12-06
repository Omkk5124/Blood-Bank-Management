import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  draw: {
    width: "200px",
  },
}));
const Menu = () => {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const handleDrawer = () => {
    setopen(true);
  };
  return (
    <div>
      <IconButton onClick={handleDrawer} color="inherit">
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setopen(false);
        }}
      >
        <div className={classes.draw}>
          <List>
            {/* <Link
                style={{ color: "initial", textDecoration: "none" }}
                to="/About"
              >
                <ListItem button={true}>
                  <ListItemText>ABOUT</ListItemText>
                </ListItem>
              </Link> */}

            {!localStorage.getItem("role") ? (
              <>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/"
                >
                  <ListItem button={true}>
                    <ListItemText button>Home</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/login"
                >
                  <ListItem button={true}>
                    <ListItemText>Login</ListItemText>
                  </ListItem>
                </Link>
                {/* <Link
                    style={{ color: "initial", textDecoration: "none" }}
                    to="/signup"
                  >
                    <ListItem button={true}>
                      <ListItemText>SIGNUP</ListItemText>
                    </ListItem>
                  </Link> */}
              </>
            ) : (
              <>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/dashboard"
                >
                  <ListItem button={true}>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItem>
                </Link>
                {/* <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/logout"
                >
                  <ListItem button={true}>
                    <ListItemText>LOG OUT</ListItemText>
                  </ListItem>
                </Link> */}
              </>
            )}
            {localStorage.getItem("role") === "admin" ? (
              <>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-donor-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-user" /> &nbsp;Donors
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-patient-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-user-injured" /> &nbsp;Patients
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-donations-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-hand-holding-medical" />{" "}
                      &nbsp;Donations
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-bloodrequests-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-sync-alt" /> &nbsp;Blood Requests
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-requesthistory-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-history" /> &nbsp;Request History
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/admin-bloodstockupdate-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-hand-holding-water" /> &nbsp;Blood
                      Stock Update
                    </ListItemText>
                  </ListItem>
                </Link>
              </>
            ) : (
              <></>
            )}

            {localStorage.getItem("role") === "donor" ? (
              <>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/donor-donateblood-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-hand-holding-medical" /> &nbsp;Donate
                      Blood
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/donor-donationhistory-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-history" /> &nbsp;Donation History
                    </ListItemText>
                  </ListItem>
                </Link>
              </>
            ) : (
              <></>
            )}

            {localStorage.getItem("role") === "patient" ? (
              <>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/patient-makebloodrequests-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-sync-alt" /> &nbsp;Make Request
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link
                  style={{ color: "initial", textDecoration: "none" }}
                  to="/patient-requesthistory-view"
                >
                  <ListItem button={true}>
                    <ListItemText>
                      <i className="fas fa-history" /> &nbsp;Request History
                    </ListItemText>
                  </ListItem>
                </Link>
              </>
            ) : (
              <></>
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;

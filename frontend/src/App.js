import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/SignInPageComponents/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbarmui";
import Home from "./components/Home";
import NavbarLoggedIn from "./components/NavbarmuiLoggedIn";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import DonorSignup from "./components/DonorSignUpPageComponents/Signup";
import PatientSignup from "./components/PatientSignUpPageComponents/Signup";
import RoleBasedRoute from "./components/RoleBasedRoute";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import UpdateAndGetStock from "./components/views/AdminView/UpdateAndGetStock";
import AdminDonorView from "./components/views/AdminView/AdminDonorView";
import AdminPatientView from "./components/views/AdminView/AdminPatientView";
import AdminDonationView from "./components/views/AdminView/AdminDonationView";
import AdminBloodRequestView from "./components/views/AdminView/AdminBloodRequestView";
import AdminBloodRequestHistoryView from "./components/views/AdminView/AdminBloodRequestHistoryView";
import PatientRequesthistoryView from "./components/views/AdminView/PatientRequesthistoryView";
import PatientMakeBloodRequestsView from "./components/views/AdminView/PatientMakeBloodRequestsView";
import DonorBloodRequestsView from "./components/views/AdminView/DonorBloodRequestsView";
import DonorRequestHistoryView from "./components/views/AdminView/DonorRequestHistoryView";


const themea = createTheme({
 
 
});

function App() {
  return (
    <ThemeProvider theme={themea}>
    <div className="App">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/patient/dashboard">
              <NavbarLoggedIn />
            </Route>
            <Route exact path="/admin/login">
              <AdminLogin />
            </Route>

            <Route exact path="/dashboard">
              <NavbarLoggedIn />
              <Dashboard />
            </Route>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/login" ><Navbar /><Login/></Route>
            <Route exact path="/donor-signup" ><Navbar /><DonorSignup/></Route>
            <Route exact path="/patient-signup" ><Navbar /><PatientSignup/></Route>

            {/* <Route exact path="/signup" component={Signup} /> */}

            <RoleBasedRoute
              exact 
              path="/admin-donor-view"
              role="admin"
              component={() => {
                return <><AdminDonorView/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/admin-patient-view"
              role="admin"
              component={() => {
                return <><AdminPatientView/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/admin-donations-view"
              role="admin"
              component={() => {
                return <><AdminDonationView/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/admin-bloodrequests-view"
              role="admin"
              component={() => {
                return <><AdminBloodRequestView/></>;
              }}
            /> 
            <RoleBasedRoute
              exact
              path="/admin-requesthistory-view"
              role="admin"
              component={() => {
                return <><AdminBloodRequestHistoryView/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/admin-bloodstockupdate-view"
              role="admin"
              component={() => {
                return <><UpdateAndGetStock/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/donor-donateblood-view"
              role="donor"
              component={() => {
                return <><DonorBloodRequestsView/></>;
              }}
            />
            {/* *********************************************** */}
            <RoleBasedRoute
              exact
              path="/donor-donationhistory-view"
              role="donor"
              component={() => {
                return  <><DonorRequestHistoryView/></>;
              }}
            />
            <RoleBasedRoute
              exact
              path="/patient-makebloodrequests-view"
              role="patient"
              component={() => {
                return <><PatientMakeBloodRequestsView/></>;
              }}
            />

            <RoleBasedRoute
              exact
              path="/patient-requesthistory-view"
              role="patient"
              component={() => {
                return <><PatientRequesthistoryView/></>;
              }}
            />
          </Switch>
        </Router>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

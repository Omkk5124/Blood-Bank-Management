import React from 'react'

const NavbarLoggedIn = () => {
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
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-danger">
        <a style={{"color": "white"}} className="navbar-brand" href="/"><i className="fab fa-gratipay"></i>&nbsp;<font face = "Comic sans MS" size ="4">Blood Bank Management System</font></a>
        
      
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" style={{"color": "white"}} href="/logout">Logout &nbsp; <i className="fas fa-sign-out-alt"></i></a>
                </li>
                
            </ul>
        </div>
      </nav>
  </div>




    </>
    )
}

export default NavbarLoggedIn

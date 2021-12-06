import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor:"black",color:"white",position:"absolute",width:"98.9vw",bottom:"-80px",height:"max-content",alignItems:"center",padding:"11px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
      <h4>Blood Bank Management System</h4>
      <h5>Made By</h5>
      {/* <ul style={{listStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}> */}
      <ul style={{listStyle:"none",float:'left',margin:"0px",padding:"0px"}}>
        <li>Om Khedkar</li>
        <li>Nidhi Kowtal</li>
        <li>Karan Lakhwani</li>
      </ul>
    </footer>
  );
};

export default Footer;

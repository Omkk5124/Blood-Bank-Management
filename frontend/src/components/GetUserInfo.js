import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "./axios";

function GetUserInfo() {
  const baseURL = "http://localhost:3001/";
  //const[isAuth,setisAuth]= useState(false);

  const history = useHistory();
  const [getInfo, setgetInfo] = useState();

  useEffect(() => {
    //const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    async function checkAuth(username) {
      //await axios.post('/getuserinfo',{token:token})
      await axios
        .post("/getUserInfo", { username: username })
        .then((res) => {
          if (res.status === 200) {
            //setisAuth(true);
            console.log(res.data);
            setgetInfo(res.data);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("roleID", res.data.roleID);
          } else {
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("roleID");
          }
        })
        .catch((err) => {
          localStorage.removeItem("username");
          localStorage.removeItem("role");
          localStorage.removeItem("roleID");
          history.replace("/login");
        });
    }
    if (username) {
      checkAuth(username);
    } else {
      history.replace("/login");
    }
  }, [history]);

  return { getInfo, baseURL };
}

export default GetUserInfo;

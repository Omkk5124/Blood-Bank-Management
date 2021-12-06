import { useEffect, useState } from "react";
import axios from "../components/axios";

const useLoginAuth2 = () => {
  const [isLoggedIn, setisLoggedIn] = useState({
    isAuth: false,
    role: null,
  });

  useEffect(() => {
    //const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    async function checkAuth(token) {
      await axios
        .post("/getUserInfo", { username: token })
        .then((res) => {
          if (res.status === 200) {
            setisLoggedIn({ isAuth: true, role: res.data.role });
          } else {
            //setisLoggedIn({isAuth:false});
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("roleID");
            console.log("token removed");
          }
        })
        .catch((err) => {
          //window.location.href='/login'
          localStorage.removeItem("username");
          localStorage.removeItem("role");
          localStorage.removeItem("roleID");
          console.log(err);
        });
    }
    if (username) {
      checkAuth(username);
    }
  }, []);

  return { isLoggedIn };
};

export default useLoginAuth2;

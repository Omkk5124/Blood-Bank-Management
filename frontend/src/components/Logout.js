const Logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("roleID");
  window.location.replace("/");

  return { Logout };
};

export default Logout;

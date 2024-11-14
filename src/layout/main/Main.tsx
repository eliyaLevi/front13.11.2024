import React from "react";
import { Login } from "../users/login/Login";
import { Register } from "../users/register/Register";
import { Users } from "../users/Users";
import { Link } from "react-router-dom";



const Main = () => {
  return <main>
    {/* <Link to={"/auth/login"}/>login<Link> */}
   <Users/>
  </main>;
};

export default Main;

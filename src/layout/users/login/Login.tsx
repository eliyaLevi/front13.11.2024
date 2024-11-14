import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provaiders/AuthProvider";
import { Tast } from "../tast";

export const Login = () => {
  const { login } = useContext(AuthContext) ?? {};

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login!(userName, password);
    setUserName('')
    setPassword('')
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="UserName">User Name</label>
          <input
            id="UserName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="userName"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

          <button type="submit" style={{ backgroundColor: "green" }}>
            Login
          </button>
          {/* <button type="submit" style={{backgroundColor: "red",  color: "white"}}><Link to={"/users"}>Cancel</Link></button> */}
        </form>
      </div>
    </div>
  );
};

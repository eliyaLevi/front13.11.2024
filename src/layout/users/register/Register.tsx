import React, { useState } from 'react'



const register = async (userName: string, password: string,organization:string, location: string) => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // חשוב בשביל קבלת הקוקיז
      body: JSON.stringify({ userName, password, organization, location}),
    });

    if (!response.ok) {
      return false;
    }
  } catch (error) {
    console.error("Login failed", error);
    return false;
  }
};


export const Register = () => {
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [organization, setOrganization] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await register!(userName, password, organization, location);
    setUserName('')
    setPassword('')
  };
  return (
    <div>
    <div>
  <form onSubmit={handleSubmit} className="form-container" >
    <label htmlFor="userName">User Name</label>
    <input
      id="userName"
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="userName"
    />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type='text'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password"
    />

<label htmlFor="organization">organization</label>
    <input
      id="organization"
      type='text'
      value={organization}
      onChange={(e) => setOrganization(e.target.value)}
      placeholder="organization"
    />

<label htmlFor="location">location</label>
    <input
      id="location"
      type='text'
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="location"
    />


    <button type="submit" style={{backgroundColor: "green" }}>Register</button>
    {/* <button type="submit" style={{backgroundColor: "red",  color: "white"}}><Link to={"/users"}>Cancel</Link></button> */}
  </form>
</div>
</div>
  )
}


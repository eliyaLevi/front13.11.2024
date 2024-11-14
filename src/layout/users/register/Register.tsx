import React from 'react'

export const Register = () => {
  return (
    <div>
    <div>
  <form className="form-container" >
    <label htmlFor="UserName">User Name</label>
    <input
      id="UserName"
      type="text"
      // value={"a"}
      // onChange={(e) => setuserName(e.target.value)}
      placeholder="userName"
    />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type='text'
      // value={email}
      // onChange={(e) => setEmail(e.target.value)}
      placeholder="password"
    />

<label htmlFor="organization">organization</label>
    <input
      id="organization"
      type='text'
      // value={email}
      // onChange={(e) => setEmail(e.target.value)}
      placeholder="organization"
    />

<label htmlFor="location">location</label>
    <input
      id="location"
      type='text'
      // value={email}
      // onChange={(e) => setEmail(e.target.value)}
      placeholder="location"
    />


    <button type="submit" style={{backgroundColor: "green" }}>Register</button>
    {/* <button type="submit" style={{backgroundColor: "red",  color: "white"}}><Link to={"/users"}>Cancel</Link></button> */}
  </form>
</div>
</div>
  )
}


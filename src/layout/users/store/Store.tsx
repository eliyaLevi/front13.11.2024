import React, { useState } from 'react'


const getMissiles = async () => {
    try {
      const response = await fetch("http://localhost:3001/store", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
      });
  
      if (!response.ok) {
        return false;
      }
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };
  
  function Store() {
    
    const [missiles, setMissiles] = useState('')
    const [password, setPassword] = useState('')
    const [organization, setOrganization] = useState('')
    const [location, setLocation] = useState('')

      const handlMissile = async () => {
      
    
        await getMissiles!();
      };
  return (
    <div>Store</div>
  )
}

export default Store

{
    "name": "Iron Dome",
    "description": "A mobile all-weather air defense system designed to intercept and destroy short-range rockets and artillery shells.",
    "speed": 3,
    "intercepts": ["Qassam", "M-75", "Fajr-5", "Zelzal-2"],
    "price": 50000
  },

interface Missile{
    name: string
}
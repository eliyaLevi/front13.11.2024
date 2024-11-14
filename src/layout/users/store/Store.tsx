import React, { useEffect, useState } from 'react'


interface Missile{
    
        name: string;
        description: string
        speed: number
        intercepts: [string]
        price: number
    
}
  
  function Store() {

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
    
      useEffect(() => {
        getMissiles()
      }, []);

      
  return (
    <>
    <div>Store</div>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
    </>
  )
}

export default Store



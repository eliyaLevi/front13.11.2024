import React from 'react'
import { Login } from './login/Login'
import { Register } from './register/Register'
import { Org } from './org/org'

export const Users = () => {
  return (
    <div>
       <Login/>
       <Register/>
       <Org/>
    </div>
  )
}


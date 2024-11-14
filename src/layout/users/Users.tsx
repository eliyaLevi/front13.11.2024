import React from 'react'
import { Login } from './login/Login'
import { Register } from './register/Register'
import { Org } from './org/org'
import Store from './store/Store'

export const Users = () => {
  return (
    <div>
       <Login/>
       <Register/>
       <Org/>
       <Store/>
    </div>
  )
}


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../users/login/Login'
import { Register } from '../users/register/Register'
import Main from '../main/Main'

export const AppRouter = () => {
  return (
    <Routes>
        <Route  path="/auth/*" element={<Main/>}/>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
    </Routes>
  )
}

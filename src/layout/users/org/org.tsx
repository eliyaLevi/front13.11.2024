import React, { useContext } from 'react'
import { AuthContext } from '../../../provaiders/AuthProvider';

export const Org = () => {

    const {user} = useContext(AuthContext) ?? {};
    console.log(user);
    

  return (
    <>
    <div>{user && <h1> organization {user.username}</h1>}</div>
    <div>{!user && <h1> Not found user plzzzz login</h1>}</div>
</>
  )
}

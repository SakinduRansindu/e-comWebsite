import React, { useState} from 'react'
import { AuthData } from '../Components/AuthWrapper/AuthWrapper';
import {Navigate} from 'react-router-dom';


export default function Login(){
  const {userLogin,user} = AuthData();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const checkLogin = (username,password)=>{
    if(username==='' || password===''){
      alert('Please enter username and password');
    }
    else{
      userLogin(username,password).then((res)=>{
        alert('Done :'+res);
      }).catch((err)=>{
        alert('Error :'+err);
      });
    }
  }



  return (
    !user.isLogedIn?
    <div>
      <h1>Login page</h1>
      <form>
        <input type="text" value={username} onChange={e=> setUsername(e.target.value)} placeholder="username"/>
        <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="password"/>
        <button onClick={e=>checkLogin(username,password)}>Login</button>
      </form>
    </div>
    :
    <Navigate to="/"/>
  )


}
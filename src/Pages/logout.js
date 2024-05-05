import React, { useEffect, useState } from 'react'
import { AuthData } from '../Components/AuthWrapper/AuthWrapper';
import {Navigate} from 'react-router-dom';


export default function Logout() {
    const {userLogout} = AuthData();
    const [isloged,setIsloged] = useState(true);
    useEffect(()=>{
        userLogout().then((res)=>{
            console.log(res);
            setIsloged(false);
        }).catch((err)=>{
            console.log(err);
            setIsloged(false);
        })
    },[]);

  return (
    isloged?
    <div>please wait...</div>
    :
    <Navigate to="/" replace={true}/>
  )
}

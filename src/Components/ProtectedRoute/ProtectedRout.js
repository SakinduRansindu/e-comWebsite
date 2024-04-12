import React from 'react';
import Page403 from '../../Pages/page403.js';
import { AuthData } from '../AuthWrapper/AuthWrapper.js'; 
import {Navigate} from 'react-router-dom';


export default function ProtectedRout(props) {
  const {user} = AuthData();
  console.log(props.authoriezedRoles);
  console.log(user.role);
  console.log(props.children);
  return (
    props.authoriezedRoles?.find(e=>e===user.role)?props.children:user.isLogedIn?<Page403/>:<Navigate to="/login" replace={true} />
  )
}

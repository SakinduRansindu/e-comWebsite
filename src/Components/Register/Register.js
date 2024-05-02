import React from 'react'
import SellerReg from './SellerReg'
import CustomerReg from './CustomerReg'

export default function Register({...props}) {

    if(props.role === "seller"){
      return(
        <SellerReg></SellerReg>
      )
    }
    else if(props.role ==='customer'){
      return(
        <CustomerReg></CustomerReg>
      )
    }
  
}

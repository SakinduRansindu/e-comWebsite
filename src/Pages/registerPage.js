import React from 'react'
import Register from '../Components/Register/Register'
import Template from './Template/Template'
import { useState,useEffect } from 'react'

export default function RegisterPage() {

    const [isCustomer, setIsCustomer] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        console.log(isCustomer);
    }, [isCustomer,isSeller])

    if(!(isSeller || isCustomer)){
  return (
    <Template renderSlideBar={false}>
        <div className="row my-3 row-cols-1 row-cols-md-2 g-1 g-md-4 g-md-5">
            <div className="container-fluid col">
        <div className="p-3 m-4 mx-sm-5 mx-md-4 mx-lg-5 border rounded card">
                        <h5 className="card-title">For Customers</h5>
                        <p className="card-text">browse items</p>
                        <button onClick={()=>setIsCustomer(true)} className="btn btn-primary">Register as a customer</button>
                    </div>
                </div>
                <div className="container-fluid col">
        <div className="p-3 m-4 mx-sm-5 mx-md-4 mx-lg-5 border rounded card">
                        <h5 className="card-title">For Sellers</h5>
                        <p className="card-text">sell items</p>
                        <button onClick={()=>setIsSeller(true)} className="btn btn-primary">Register as a seller</button>
                    </div>
                </div>
            </div>
    </Template>
  )
}
else if(isSeller){
    return(
        <Register role="seller"></Register>
    )
}
else{
    return(
        <Register role="customer"></Register>
    )
}
}

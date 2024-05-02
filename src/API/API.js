import React from 'react'
import axios from "axios";


export const createUser =async (uname, FirstName, LastName, Email, Password, Account_No, Card_CVC, Card_Exp, Phone_No, ProfilePicture)=>{
    console.log('createUser');
    const body_data  = JSON.stringify({uname, FirstName, LastName, Email, Password, Account_No, Card_CVC, Card_Exp, Phone_No, ProfilePicture});
    console.log(body_data);

    return axios({
    url: "/api/v1/auth/userReg",
    method: "POST",
    mode:'cors',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'redirect': "follow",
    },
    data: body_data,
    })
}

export const createSeller =async (DisplayName, Email, Password, Bank_Acc_No, Phone_No, ProfilePicture)=>{
    console.log('createSeller');
    const body_data  = JSON.stringify({DisplayName, Email, Password, Bank_Acc_No, Phone_No, ProfilePicture});
    console.log(body_data);

    return axios({
    url: "/api/v1/auth/sellerReg",
    method: "POST",
    mode:'cors',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'redirect': "follow",
    },
    data: body_data,
    })
}

export const testCreate = ()=>{
    console.log("test create");


    axios({
        url: "/api/v1/auth/test",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",

        },
    })
        .then((res) => {console.log(res);})
        .catch((err) => {console.error(err);});


}


export default function API( ) {
    return (
        <div>
            
        </div>
    )
}

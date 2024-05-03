import React from 'react'
import TextInput from '../Input/TextInput'
import ProfilePictureSet from '../ProfilePicture/ProfilePictureSet';
import { useState,useEffect } from 'react'
import { createUser,testCreate } from '../../API/API';
import Alert from '../Alert/Alert';

export default function CustomerReg() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [FirstName, setFName] = useState("");
    const [LastName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Bank_Acc_No, setBank_Acc_No] = useState("");
    const [Phone_No, setPhone_No] = useState("");
    const [ProfilePictureLink, setProfilePictureLink] = useState(null);
    const [message, setMessage] = useState({color:'alert-danger',message:'',isSuccess:false});
    const [display,setDisplay] = useState(false);

    const clear=()=>{
      setUsername("");
      setPassword("");
      setFName("");
      setLName("");
      setEmail("");
      setBank_Acc_No("");
      setPhone_No("");
      setDisplay(false);
    }
    
    let timeout;
    useEffect(()=>{
      timeout = setTimeout(()=>{
        if(timeout){
          console.log('clearing timeout');
          clearTimeout(timeout);
        }
        setDisplay(false);
        if(message.isSuccess){
          clear();
        }
      },5000);
    },[message]);

    const register=(e)=>{
      e.preventDefault();
      createUser(username, FirstName, LastName, Email,password, Bank_Acc_No,'','', Phone_No, ProfilePictureLink)
      .then((res)=>{
        console.log(res.data.message);
        setMessage({color:'alert-success',message:res.data.message,isSuccess:true});
        setDisplay(true);
      })
      .catch((err)=>{
        console.error(err.response.data.message);
        setMessage({color:'alert-danger',message:err.response.data.message,isSuccess:false});
        setDisplay(true);
          });
      return false;
    }


  return (
    <>
    <form className="container mx-auto my-3 border dark2 rounded p-3" >
    <h1>Customer Register</h1>

    {/* FirstName,LastName,Email,Account_No,Phone_No,ProfilePictureLink */}

    <ProfilePictureSet onChange={(e)=>setProfilePictureLink(e.target.files[0])}>
    </ProfilePictureSet>

      <TextInput
        type="text"
        label="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isRequired={true}
        placeholder="Username"
      ></TextInput>

      <TextInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        isRequired={true}
      ></TextInput>

        <TextInput
        type="text"
        label="First Name"
        value={FirstName}
        onChange={(e) => setFName(e.target.value)}
        isRequired={true}
        placeholder="First Name"
        ></TextInput>

        <TextInput
        type="text"
        label="Last Name"
        value={LastName}
        onChange={(e) => setLName(e.target.value)}
        isRequired={true}
        placeholder="Last Name"
        ></TextInput>

        <TextInput
        type="text"
        label="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired={true}
        placeholder="Email"
        ></TextInput>

        <TextInput
        type="text"
        label="Bank Account Number"
        value={Bank_Acc_No}
        onChange={(e) => setBank_Acc_No(e.target.value)}
        isRequired={false}
        placeholder="Bank Account Number"
        ></TextInput>

        <TextInput
        type="text"
        label="Phone Number"
        value={Phone_No}
        onChange={(e) => setPhone_No(e.target.value)}
        isRequired={false}
        placeholder="Phone Number"
        ></TextInput>
      
      <div className="row">
          {display?<Alert title={message.isSuccess?"Success":"Error"} message={message.message} type={message.color}></Alert>:null}
          <div className="col-md-12">
              <button disabled={display} type="button" onClick={(e)=>clear()} className="btn btn-danger">Clear</button>
              <button disabled={display} className="btn btn-success float-end" onClick={(e)=>register(e)}>Register</button>
          </div>
      </div>

    </form>
    </>
  )
}

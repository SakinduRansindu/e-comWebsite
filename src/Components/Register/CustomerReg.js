import React from 'react'
import TextInput from '../Input/TextInput'
import ProfilePictureSet from '../ProfilePicture/ProfilePictureSet';
import { useState } from 'react'

export default function CustomerReg() {

    const [username, setUsername] = useState("");
    const [FirstName, setFName] = useState("");
    const [LastName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Bank_Acc_No, setBank_Acc_No] = useState("");
    const [Phone_No, setPhone_No] = useState("");
    const [ProfilePictureLink, setProfilePictureLink] = useState(null);

    const clear=()=>{
      setUsername("");
      setFName("");
      setLName("");
      setEmail("");
      setBank_Acc_No("");
      setPhone_No("");
    }

  return (
    <>
    <form className="container mx-auto my-3 border dark2 rounded p-3">
    <h1>Customer Register</h1>

    {/* FirstName,LastName,Email,Account_No,Phone_No,ProfilePictureLink */}

    <ProfilePictureSet onChange={(e)=>setProfilePictureLink(e.target.files[0])}>
    </ProfilePictureSet>

      <TextInput
        type="text"
        label="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isRequired="true"
        placeholder="Username"
      ></TextInput>

        <TextInput
        type="text"
        label="First Name"
        value={FirstName}
        onChange={(e) => setFName(e.target.value)}
        isRequired="true"
        placeholder="First Name"
        ></TextInput>

        <TextInput
        type="text"
        label="Last Name"
        value={LastName}
        onChange={(e) => setLName(e.target.value)}
        isRequired="true"
        placeholder="Last Name"
        ></TextInput>

        <TextInput
        type="text"
        label="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired="true"
        placeholder="Email"
        ></TextInput>

        <TextInput
        type="text"
        label="Bank Account Number"
        value={Bank_Acc_No}
        onChange={(e) => setBank_Acc_No(e.target.value)}
        isRequired="true"
        placeholder="Bank Account Number"
        ></TextInput>

        <TextInput
        type="text"
        label="Phone Number"
        value={Phone_No}
        onChange={(e) => setPhone_No(e.target.value)}
        isRequired="false"
        placeholder="Phone Number"
        ></TextInput>

      
      <div class="row">
          <div class="col-md-12">
              <button type="button" onClick={(e)=>clear()} class="btn btn-danger">Clear</button>
              <button class="btn btn-success float-end" onClick={(e) => console.log(e)}>Register</button>
          </div>
      </div>

    </form>
    </>
  )
}

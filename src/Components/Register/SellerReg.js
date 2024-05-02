import React from 'react'
import TextInput from '../Input/TextInput'
import ProfilePictureSet from '../ProfilePicture/ProfilePictureSet';
import { useState } from 'react'

export default function SellerReg() {

    const [username, setUsername] = useState("");
    const [DisplayName, setDisplayName] = useState("");
    const [Email, setEmail] = useState("");
    const [Bank_Acc_No, setBank_Acc_No] = useState("");
    const [Phone_No, setPhone_No] = useState("");
    const [ProfilePictureLink, setProfilePictureLink] = useState(null);

    const clear=()=>{
        setUsername("");
        setDisplayName("");
        setEmail("");
        setBank_Acc_No("");
        setPhone_No("");
        }

  return (
    <>
    <form className="container mx-auto my-3 border dark2 rounded p-3">
    <h1 className=''>Seller Register</h1>

    {/* username,DisplayName,Email,Bank_Acc_No,Phone_No,ProfilePictureLink */}

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
        label="Display Name"
        value={DisplayName}
        onChange={(e) => setDisplayName(e.target.value)}
        isRequired="true"
        placeholder="Display Name"
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

import React from 'react'
import { useState, createRef } from 'react';
import ProfilePicture from '../../Images/user.png'


export default function ProfilePictureSet(
    {
        label,
        value,
        onChange,
        placeholder,
        isRequired = false,
        ...props
      }
) {

    const [image, setImage] = useState(null);
    const fileRef = createRef();

    const onChangeInner = (e) => {
        
        if(e.target.files.length>0){
        setImage(URL.createObjectURL(e.target.files[0]));
        onChange(e);
        }
    }
    const onImgClick = () => {
        fileRef.current.click();
    }


  return (
    <div className="m-2 mb-3">
      {label && (
        <label htmlFor="customInput" className="form-label">
          {label}
        </label>
      )}
      <input
        className="d-none"
        type="file"
        ref={fileRef}
        value={value}
        onChange={onChangeInner}
        required={isRequired}
        aria-label={label}
        aria-required={isRequired}
        {...props}
      />
      <img src={image||ProfilePicture} onClick={()=>onImgClick()} className="rounded-circle float-right border" style={{width:'20vw',height:'20vw',cursor:'pointer'}} alt="profile picture"/>
      </div>
  )
}

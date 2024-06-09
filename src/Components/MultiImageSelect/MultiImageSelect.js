import {React , useEffect }from "react";
import { useState, createRef } from "react";
import DefaultImage from "../../Images/no-image.png";
import Carousel from "../Carousel/Carousel";
// import useEffect from "react";

export default function MultiImageSelect({
  label,
  onChange,
  placeholder,
  onClearCalled,
  isRequired = false,
  ...props
}) {
  const [images, setImage] = useState(null);
  const fileRef = createRef();

  const onChangeInner = (e) => {
    if (e.target.files.length > 0) {
      console.log(e.target.files);
      const objURLs = [];
      for (let i = 0; i < e.target.files.length; i++) {
        objURLs.push(URL.createObjectURL(e.target.files[i]));
      }
      setImage(objURLs);
      onChange(e);
    }
  };

  const onImgClick = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (onClearCalled) {
      setImage(null); 
    }
  }, [onClearCalled]);

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
        multiple="multiple"
        ref={fileRef}
        onChange={onChangeInner}
        required={isRequired}
        aria-label={label}
        aria-required={isRequired}
        {...props}
      />
      {/* <img src={images[0]||DefaultImage} onClick={()=>onImgClick()} class="float-right border" style={{width:'20vw',height:'20vw',cursor:'pointer'}} alt="product"/> */}
      <Carousel
        Imgs={images || [DefaultImage]}
        Cid="inputs"
        onClick={() => onImgClick()}
        style={{
          maxWidth: "400px",
          maxHeight: "400px",
          cursor: "pointer",
          "margin-left": "auto",
          "margin-right": "auto",
        }}
      ></Carousel>
    </div>
  );
}

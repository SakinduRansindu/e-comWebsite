import React from 'react'
import { useState, useEffect } from 'react';
import MultiImageSelect from '../MultiImageSelect/MultiImageSelect';
import TextInput from '../Input/TextInput';
import NumberInput from '../Input/NumberInput';
import TextAreaInput from '../Input/TextAreaInput';
import Alert from '../Alert/Alert';
import {ProductAdd} from '../../API/ProductsApi';
import {AuthData} from '../AuthWrapper/AuthWrapper';


export default function AddProductForm() {
  const { CheckSessionErrors } = AuthData();

  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [availableUnits, setAvailableUnits] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountEndDate, setDiscountEndDate] = useState("");
  const [images, setImages] = useState([]);
  const [DisplayName, setDisplayName] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState({
    color: "alert-danger",
    message: "",
    isSuccess: false,
  });
  const [display, setDisplay] = useState(false);

  const clear = () => {
    setDescription("");
    setUnitPrice("");
    setAvailableUnits("");
    setDiscount("");
    setDiscountEndDate("");
    setImages([]);
    setDisplayName("");
    setCategory("");
  };

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      if (timeout) {
        console.log("clearing timeout");
        clearTimeout(timeout);
      }
      setDisplay(false);
      if (message.isSuccess) {
        clear();
      }
    }, 5000);
  }, [message]);

  const addProduct = (e) => {
    e.preventDefault();
    console.log(images);
    ProductAdd(
      category,
      availableUnits,
      DisplayName,
      description,
      unitPrice,
      discount,
      discountEndDate,
      images
    )
      .then((res) => {
        console.log(res.data.message);
        setMessage({
          color: "alert-success",
          message: res.data.message,
          isSuccess: true,
        });
        setDisplay(true);
      })
      .catch((err) => {
        console.error(err.message);
        CheckSessionErrors(err);
        setMessage({ color: 'alert-danger', message: err.message, isSuccess: false });
        setDisplay(true);
      });
  };

  return (
    <form className="container mx-auto my-3 border dark2 rounded p-3">
      <h1> Add a product</h1>
      <MultiImageSelect
        label="Product Images"
        onChange={(e) => setImages(e.target.files)}
        isRequired={false}
        placeholder="Product Name"
      ></MultiImageSelect>

      <TextInput
        type="text"
        label="Display Name"
        value={DisplayName}
        onChange={(e) => setDisplayName(e.target.value)}
        isRequired="true"
        placeholder="Product Name"
      ></TextInput>

      <TextInput
        type="text"
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        isRequired={false}
        placeholder="Category"
      ></TextInput>

      <TextAreaInput
        label="Description"
        isRequired="true"
        placeholder="Brief Description of the product..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></TextAreaInput>

      <NumberInput
        label="Unit Price (Rs.)"
        isRequired="true"
        placeholder="Unit Price"
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
      ></NumberInput>

      <NumberInput
        label="Available Units"
        isRequired="true"
        placeholder="100"
        value={availableUnits}
        onChange={(e) => setAvailableUnits(e.target.value)}
      ></NumberInput>

      <NumberInput
        label="Discount"
        isRequired="false"
        placeholder="5%"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      ></NumberInput>

      <TextInput
        type="date"
        label="Discount End Date"
        value={discountEndDate}
        onChange={(e) => setDiscountEndDate(e.target.value)}
        isRequired={false}
        placeholder="end date"
      ></TextInput>

      <div className="row">
        {display ? (
          <Alert
            title={message.isSuccess ? "Success" : "Error"}
            message={message.message}
            type={message.color}
          ></Alert>
        ) : null}
        <div className="col-md-12">
          <button
            type="button"
            onClick={(e) => clear()}
            className="btn btn-danger"
          >
            Clear
          </button>
          <button
            className="btn btn-success float-end"
            onClick={(e) => addProduct(e)}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

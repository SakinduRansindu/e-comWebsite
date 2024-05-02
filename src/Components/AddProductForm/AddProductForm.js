import React from 'react'
import { useState } from 'react';
import MultiImageSelect from '../MultiImageSelect/MultiImageSelect';
import TextInput from '../Input/TextInput';
import NumberInput from '../Input/NumberInput';
import TextAreaInput from '../Input/TextAreaInput';



export default function AddProductForm() {

  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [availableUnits, setAvailableUnits] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountEndDate, setDiscountEndDate] = useState("");
  const [images, setImages] = useState([]);
  const [DisplayName, setDisplayName] = useState(0);

  const clear = () => {
    setDescription("");
    setUnitPrice("");
    setAvailableUnits("");
    setDiscount("");
    setDiscountEndDate("");
    setImages([]);
    setDisplayName("");
  }


  return (

    <form className="container mx-auto my-3 border dark2 rounded p-3">
    <h1> Add a product</h1>
    <MultiImageSelect
      label="Product Images"
      onChange={(e) => setImages(e.target.value)}
      isRequired="true"
      placeholder="Product Name"
    >
    </MultiImageSelect>

    {/* Category,AvailableUnits,DisplayName,Description,UnitPrice,Discount,DiscountEndDate,views */}

      <TextInput
        type="text"
        label="Display Name"
        value={DisplayName}
        onChange={(e) => setDisplayName(e.target.value)}
        isRequired="true"
        placeholder="Product Name"
      ></TextInput>

    <TextAreaInput
      label="Description"
      isRequired="true"
      placeholder="Brief Description of the product..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    ></TextAreaInput>

    <NumberInput
      label="Unit Price"
      isRequired="true"
      placeholder="Unit Price"
      max="20"
      value={unitPrice}
      onChange={(e) => setUnitPrice(e.target.value)}
    ></NumberInput>

    <NumberInput
      label="Available Units"
      isRequired="true"
      placeholder="100"
      max="20"
      value={availableUnits}
      onChange={(e) => setAvailableUnits(e.target.value)}
    ></NumberInput>

    <NumberInput
      label="Discount"
      isRequired="false"
      placeholder="5"
      max="20"
      value={discount}
      onChange={(e) => setDiscount(e.target.value)}
    ></NumberInput>

        <TextInput
        type="date"
        label="Discount End Date"
        value={discountEndDate}
        onChange={(e) => setDiscountEndDate(e.target.value)}
        isRequired="false"
        placeholder="end date"
        ></TextInput>
      
      <div class="row">
          <div class="col-md-12">
              <button type="button" onClick={(e)=>clear()} class="btn btn-danger">Clear</button>
              <button class="btn btn-success float-end" onClick={(e) => console.log(e)}>Register</button>
          </div>
      </div>

    </form>
  )
}


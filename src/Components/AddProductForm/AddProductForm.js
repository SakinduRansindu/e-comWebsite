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
    <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div class=" p-4 p-md-5 rounded shadow-sm">
              <div class="row">
                <div class="col-12">
                  <div class="text-center mb-5">
                    <h2 class="mb-4 display-5 text-center">Add a product</h2>
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                  </div>
                </div>
              </div>
    <form >
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12 text-center">
                    <label for="Product Images" class="form-label">
                      Product Image
                    </label>
                    
                        <MultiImageSelect
                          onChange={(e) => setImages(e.target.files)}
                          isRequired={false}
                          placeholder="Product Name"
                        ></MultiImageSelect>
                  </div>

                  <div class="col-12">
                    <label for="Display Name" class="form-label">
                    Display Name <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">

                      <input 
                        class="form-control"
                        type="text"
                        value={DisplayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required
                        placeholder="Product Name"
                      />
                    </div>
                  </div>
     
                  <div class="col-12">
                    <label for="Category" class="form-label">
                    Category <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        class="form-control"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="Description" class="form-label">
                    Description <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                     <textarea
                        class="form-control"
                        required
                        placeholder="Brief Description of the product..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="Unit Price (Rs.)" class="form-label">
                    Unit Price (Rs.) <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        class="form-control"
                        type="number"
                        required
                        placeholder="Unit Price"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)}
                      ></input>
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="Available Units" class="form-label">
                    Available Units <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                    <input
                        class="form-control"
                        type="number"
                        required
                        placeholder="100"
                        value={availableUnits}
                        onChange={(e) => setAvailableUnits(e.target.value)}
                      ></input>
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="Discount" class="form-label">
                    Discount
                    </label>
                    <div class="input-group">
                    <input
                        class="form-control"
                        type="number"         
                        placeholder="5%"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="date" class="form-label">
                    date <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                    <input
                        class="form-control"
                        type="date"
                        value={discountEndDate}
                        onChange={(e) => setDiscountEndDate(e.target.value)}
                        placeholder="end date"
                      ></input>
                    </div>
                  </div>
 

      

     
      <div class="col-12">
          <button
            disabled={display}
            type="button"
            onClick={(e) => clear()}
            className="btn btn-outline-secondary btn-sm"
          >
            Clear
          </button>
          </div>
        {display ? (
          <Alert
            title={message.isSuccess ? "Success" : "Error"}
            message={message.message}
            type={message.color}
          ></Alert>
        ) : null}

          <div class="col-12">
          <div class="d-grid">
          <button
            className="btn btn-primary btn-lg"
            disabled={display}
            onClick={(e) => addProduct(e)}
          >
            Add product
          </button>
          </div>
          </div>
        
      </div>
    </form>
  </div>
 </div>
 </div>
 </div>
  );
}












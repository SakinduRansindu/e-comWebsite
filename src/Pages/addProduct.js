import React from 'react'
import AddProductForm from '../Components/AddProductForm/AddProductForm'
import Template from './Template/Template'

export default function AddProduct() {
  return (
    <Template renderSlideBar={false}>
      <AddProductForm></AddProductForm>
    </Template>
  )
}

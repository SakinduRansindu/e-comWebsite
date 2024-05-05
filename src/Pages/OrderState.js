import React from 'react'
import Template from './Template/Template'
import {calculateDiscount} from '../API/ProductsApi'

export default function OrderState() {
  console.log(calculateDiscount(100,10,"2024-05-05T00:00:00.000Z"));
  return (
    <Template renderSlideBar={false}>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start dark2">
          <div className="d-flex w-100 justify-content-between">
            <div className='d-flex justify-content-between w-75'>
            <h5 className="m-1 p-4 mr-5">product name</h5>
            <p className="m-1 p-4 rounded border success">state</p>
            </div>
            <small className='m-1 p-1 rounded'>3 days ago</small>
          </div>
        </a>
      </div>
    </Template>
  )
}

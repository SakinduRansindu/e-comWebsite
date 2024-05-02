import React from 'react'
import axios from 'axios'


export const ProductAdd=( Category, AvailableUnits, DisplayName, Description, UnitPrice, Discount, DiscountEndDate,imgs )=> {
    return axios({
        url: "/api/v1/product/add",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify({ Category, AvailableUnits, DisplayName, Description, UnitPrice, Discount, DiscountEndDate,imgs }),

    })
}

export const ProductGet=()=> {
    return axios({
        url: "/api/v1/product/getProducts",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
    })
}


export default function ProductsApi() {
  return (
    <div>
      
    </div>
  )
}

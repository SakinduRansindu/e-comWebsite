import React from 'react'
import axios from 'axios'


export const ProductAdd=( Category, AvailableUnits, DisplayName, Description, UnitPrice, Discount, DiscountEndDate,imgs )=> {
    const formData = new FormData();
    formData.append('Category', Category);
    formData.append('AvailableUnits', AvailableUnits);
    formData.append('DisplayName', DisplayName);
    formData.append('Description', Description);
    formData.append('UnitPrice', UnitPrice);
    formData.append('Discount', Discount);
    formData.append('DiscountEndDate', DiscountEndDate);

    for (let i = 0; i < imgs.length; i++) {
        formData.append(`imgs`, imgs[i]);
    }
    
    return axios({
        url: "/api/v1/product/add",
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
        },
        data: formData,

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

export const SellerOrders =(SId)=> {
    return axios({
        url: '/api/v1/order/',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify({SId})
    })
}

export const GetProductDetails=(productId)=> {
    return axios({
        url: `/api/v1/product/getProductDetails?productId=${productId}`,
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

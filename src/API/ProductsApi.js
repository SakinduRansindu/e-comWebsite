import React from 'react'
import axios from 'axios'
import moment from 'moment'


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
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "/api/v1/product/add",
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
        data: formData,

    })
}

export const SetSellerOrderStatus = (id,state)=>{
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 10000,
        url: `/api/v1/order/setState/${id}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
        data: JSON.stringify({state})
    })
}

export const CustomerOrdersState = ()=>{
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `/api/v1/order/customer`,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
    })
}

export const ProductGet=(limit=20,offset=0)=> {
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "/api/v1/product/getProducts",
        timeout: 10000,
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            'Content-Type': 'application/json',
        },
        params:{limit,offset}
    })
}

export const SellerOrders =(SId)=> {
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 10000,
        url: '/api/v1/order/',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
        data: JSON.stringify({SId})
    })
}

export const GetProductDetails=(productId)=> {
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `/api/v1/product/getProductDetails?productId=${productId}`,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
    })
}

export const PurchaseProduct = (ProductId,Units)=>{
    return axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `/api/v1/purchase`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Access-Control-Allow-Credentials": true,
        },
        data: JSON.stringify({ProductId,Units})
    })
}

export const calculateDiscount=(unitprice,discountPersentage,DiscountEndDate)=>{
    const discountEnd  = moment(DiscountEndDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const now = moment();
    if(discountEnd.isValid() && now.isBefore(discountEnd) && discountPersentage>0 && discountPersentage<=100){
        console.log("discount valied");
        let discountRemains = discountEnd.diff(now,'days');
        let timeUnit = " days";
        if(discountRemains===0){
            discountRemains = discountEnd.diff(now,'hours');
            timeUnit = " hours";
            if(discountRemains===0){
                return {price:unitprice,isDiscountApplied:false,remainingDays:"0 days"};
            }
        }
        return {price:(unitprice * (100-discountPersentage) / 100),isDiscountApplied:true ,remainingDays:discountRemains+timeUnit};
    }
    else{
        console.log("discount not valied");
        return {price:unitprice,isDiscountApplied:false,remainingDays:0};
    }
    
    
}



export default function ProductsApi() {
  return (
    <div>
      
    </div>
  )
}

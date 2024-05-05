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
        url: "/api/v1/product/add",
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
        },
        data: formData,

    })
}

export const SetSellerOrderStatus = (id,state)=>{
    return axios({
        url: `/api/v1/order/setState/${id}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify({state})
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

export const calculateDiscount=(unitprice,discountPersentage,DiscountEndDate)=>{
    const discountEnd  = moment(DiscountEndDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const now = moment();
    if(discountEnd.isValid() && now.isBefore(discountEnd) && discountPersentage>0 && discountPersentage<=100){
        console.log("discount valied");
        return {price:(unitprice * (100-discountPersentage) / 100),isDiscountApplied:true};
    }
    else{
        console.log("discount not valied");
        return {price:unitprice,isDiscountApplied:false};
    }
    
    
}



export default function ProductsApi() {
  return (
    <div>
      
    </div>
  )
}

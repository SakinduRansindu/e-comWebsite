import React,{useState,useEffect} from 'react'
import Template from './Template/Template'
import {CustomerOrdersState} from '../API/ProductsApi'
import OrderListWrapper from '../Components/OrderListWrapper/OrderListWrapper'
import {AuthData} from '../Components/AuthWrapper/AuthWrapper'


export default function OrderState() {

  const [orders,setOrders] = useState({});
  const {CheckSessionErrors} = AuthData();

  useEffect(() => {
    CustomerOrdersState().then((res)=>{
      console.log(res);
      setOrders(res.data.purchase);
    }).catch((err)=>{
      CheckSessionErrors(err);
      console.log(err);
    });
  }, []);

  return (
    <Template renderSlideBar={false}>
      <OrderListWrapper data={orders}></OrderListWrapper>
    </Template>
  )
}

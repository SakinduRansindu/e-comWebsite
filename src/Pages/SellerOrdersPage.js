import React,{useEffect,useState} from 'react'
import { SellerOrders } from '../API/ProductsApi'
import {AuthData} from '../Components/AuthWrapper/AuthWrapper'
import Template from './Template/Template';
import OrderListWrapper from '../Components/OrderListWrapper/OrderListWrapper';

export default function SellerOrdersPage() {
    const {CheckSessionErrors} = AuthData();
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        SellerOrders(1).then((res)=>{
            console.log(res);
            setOrders(res.data.purchases);
        }).catch((err)=>{
            console.log(err);
            CheckSessionErrors(err);
        });

    }, []);

  return (
    <Template>
      {/* (state !== 'pending' && state !== 'shipped' && state !== 'delivered' && state !== 'cancelled') */}
      <div>
          {/* {JSON.stringify(orders)} */}
      </div>
      <OrderListWrapper data={orders}></OrderListWrapper>
    </Template>
  )
}

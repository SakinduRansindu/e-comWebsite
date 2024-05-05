import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Template from './Template/Template'
import { GetProductDetails } from '../API/ProductsApi';

export default function ViewProduct() {
    
    const params = useParams();

    const [product, setProduct] = useState({});
    const [state, setstate] = useState('loading');

    useEffect(() => {
        GetProductDetails(params.pid).then((res)=>{
            setProduct(res.data);
            setstate('loaded');
        }).catch((err)=>{
            console.error(err);
            setstate('error');
        });
    }, []);

    console.log(params);
  return (
    <Template renderSlideBar={false}>
    {
    state==='loading'?(<div>loading product {params.pid} </div>)
    :
    (state==='loaded'?<div>{JSON.stringify(product)}</div>:<div>error loading product {params.pid}</div>)
    }
    </Template>
  )
}

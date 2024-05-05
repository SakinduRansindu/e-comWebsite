import React,{useState,useEffect} from 'react'
import ProductContainer from '../Components/ProductContainer/ProductContainer'
import Template from './Template/Template'
import { ProductGet } from '../API/ProductsApi';
import defaultImg from '../Images/no-image.png';
import { calculateDiscount } from '../API/ProductsApi';

export default function BrowseProducts() {

//   const imgs = [
//     'https://i.pinimg.com/564x/97/67/95/976795f595eb9505ec36dd9277289b8c.jpg',
//     'https://i.pinimg.com/564x/f3/a9/5d/f3a95d3e3f30a31de37c15d47ddc11b1.jpg',
//     'https://i.pinimg.com/564x/62/4e/25/624e25adaaf72f67a420431fe53ca373.jpg',
// ];

// const products = [
//   {
//     title: "T-shirt",
//     description: "description of the product",
//     Imgs: imgs,
//     productUrl: "about:blank",
//     seller: "mora",
//   },
//   {
//     title: "T-shirt 2",
//     description: "description of the product",
//     Imgs: imgs,
//     productUrl: "about:blank",
//     seller: "mora",
//   },

// ];
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getlist();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const getlist=()=> {
    ProductGet().then((res)=>{
      console.log(res.data.products);
      let tmp=[];
      res.data.products.map(element => {
        let imgs = [];
        if( element.ProductImgs.length>0){
          element.ProductImgs.forEach(ele => {
            imgs.push(`/uploads/${ele.imgUrl}`);
          });
        }
        else{
          imgs.push(defaultImg);
        }
        const { price, isDiscountApplied } = calculateDiscount(element.UnitPrice, element.Discount, element.DiscountEndDate);
        tmp.push({
          title:element.DisplayName,
          description:element.Description,
          Imgs:imgs,
          productUrl:"/viewProduct/"+element.ProductId,
          seller:element.Seller.DisplayName, 
          Price:price, 
          isDiscountApplied: isDiscountApplied,
          priceBeforeDiscount: element.UnitPrice, 
          availableUnits: element.AvailableUnits, 
          category: element.Category, 
          productId: element.ProductId
        });
      });
      // setProduct([...products,{title:element.DisplayName,description:element.Description,Imgs:[defaultImg],productUrl:"/viewProduct/"+element.ProductId,seller:element.SId}]);
      setProduct([...tmp]);
    }).catch((err)=>{
      console.error(err);
    });
  }

  return (
    <Template renderSlideBar={true}>
        <ProductContainer ContainerTitle='' products={products}></ProductContainer>
    </Template>
  )
}

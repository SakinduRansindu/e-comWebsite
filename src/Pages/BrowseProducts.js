import React,{useState,useEffect} from 'react'
import ProductContainer from '../Components/ProductContainer/ProductContainer'
import Template from './Template/Template'
import { ProductGet } from '../API/ProductsApi';
import defaultImg from '../Images/no-image.png';
import { calculateDiscount } from '../API/ProductsApi';

export default function BrowseProducts() {
  const [products, setProduct] = useState([]);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [reachEnd, setReachEnd] = useState(false);
  
  useEffect(() => {
    getlist();

  const observer = new IntersectionObserver(()=>{setReachEnd(true)} , {threshold:0.5});
  const root = document.getElementById('listend');
  observer.observe(root);

    }, []);

  useEffect(() => { 
    if(reachEnd){
      getlist();
      setReachEnd(false);
    }
  }, [reachEnd]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const getlist=()=> {
    if(isAllLoaded){
      console.log("all loaded");
      return;
    }
    if(isloading){
      console.log("loading");
      return;
    }
    setIsLoading(true);
    ProductGet(limit,offset).then((res)=>{
      console.log(res.data.products);
      setOffset(offset+limit);
      setIsLoading(false);
      if(res.data.products.length<limit){
        setIsAllLoaded(true);
      }
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
        const { price, isDiscountApplied ,remainingDays } = calculateDiscount(element.UnitPrice, element.Discount, element.DiscountEndDate);
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
          productId: element.ProductId,
          Discount: element.Discount,
          remainingDays:remainingDays
        });
      });
      // setProduct([...products,{title:element.DisplayName,description:element.Description,Imgs:[defaultImg],productUrl:"/viewProduct/"+element.ProductId,seller:element.SId}]);
      setProduct([...products,...tmp]);
    }).catch((err)=>{
      isloading(false);
      console.error(err);
    });
  }

  return (
    <Template renderSlideBar={true}>
        <ProductContainer ContainerTitle='' products={products}></ProductContainer>
        <div className='container d-flex flex-align-center my-3' id="listend">
          {!isAllLoaded?
          <button className='btn btn-success mx-auto' onClick={()=>getlist()}>
            {isloading?
            (<>
            <span class="spinner-grow spinner-grow-sm mx-1" role="status" aria-hidden="true"></span>
            Loading...
            </>)
            :
            (<>
            Load More
            </>)}
          </button>
          :
          <></>
          }
        </div>
    </Template>
  )
}

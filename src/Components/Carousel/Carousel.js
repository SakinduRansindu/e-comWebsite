import React from 'react'

export default function Carousel({...props}) {
  return (
    <div id={"carouselId"+props.Cid} className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner">
    {
        props.Imgs.map((e,i)=>{
            console.log(e,i);
            return(
            <div className={"carousel-item "+(i===0?"active":"")}>
             <img src={e} className="d-block w-100" alt={"Product Item "+props.Cid} />
            </div>
            );
        })
    }
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={"#carouselId"+props.Cid} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={"#carouselId"+props.Cid} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

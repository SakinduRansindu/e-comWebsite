import React from 'react'
import Carousel from '../Carousel/Carousel'

export default function ProductItem({...props}) {
  return (
    <div className="container-fluid col">
        <div className="p-3 m-4 mx-sm-5 mx-md-4 mx-lg-5 border rounded card">
            <Carousel Cid={props.id} Imgs={props.Imgs}></Carousel>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.productUrl} className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    </div>
  )
}

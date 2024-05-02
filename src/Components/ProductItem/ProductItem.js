import React from 'react'
import Carousel from '../Carousel/Carousel'

export default function ProductItem({...props}) {
  return (
    <div className="container-fluid col">
        <div className="p-3 m-4 mx-sm-5 mx-md-4 mx-lg-5 border rounded card">
            <Carousel Cid={props.id} Imgs={props.Imgs} style={null} onClick={null}></Carousel>
            <div className="card-body d-flex flex-column">
              <div className='d-block'>
                <h5 className="card-title">{props.title}</h5>
              </div>
              <div className='p-2'>
                <p className="card-text">{props.description}</p>
              </div>
                <div className='d-flex py-2 flex-column'>
                  <p className="card-text small p-0 m-0 text-end text-muted">by {props.seller}</p>
                  <a href={props.productUrl} className="btn btn-primary m-0">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

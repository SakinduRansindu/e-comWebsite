import React from 'react'
import Carousel from '../Carousel/Carousel'

export default function ProductItem({...props}) {
  return (
    <div class="container-fluid col">
        <div class="p-3 m-4 mx-sm-5 mx-md-4 mx-lg-5 border bg-light rounded card">
            <Carousel Cid={props.id} Imgs={props.Imgs}></Carousel>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
    </div>
  )
}

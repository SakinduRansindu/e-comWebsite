import React from 'react'
import Template from './Template/Template'
import HeaderImage from '../Images/ecommerce.jpg'

export default function LandingPage() {
  return (
    <Template renderSlideBar={false}>
        <img src={HeaderImage} alt="landing page" className="img-fluid rounded-1"/>   
    <div className="landing-content p-5 mx-auto my-5 dark2 rounded-1">
        <h1>Welcome to our E-commerce Store!</h1>
        <p>Shop the latest trends and discover amazing deals.</p>
        <a className="btn btn-primary" href="/browse">Shop Now</a>
    </div>
    </Template>
  )
}

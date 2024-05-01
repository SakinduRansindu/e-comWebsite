import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {AuthData} from "../../Components/AuthWrapper/AuthWrapper";
import { Navigate } from "react-router-dom";
import SlideBar from "../../Components/Slidebar/SlideBar";


const TemplateWithSidebar = (childrens,renderSlideBar)=>{
    return(
        <>
        <Navbar/>
        {renderSlideBar?<SlideBar/>:<></>}
        <div className="container-fluid">
            {childrens}
        </div>
        <Footer />
        </>
    )
}

export default function Template({...props}) {
    const {user} = AuthData();
    const RedirectIfNotLoged = props.RedirectIfNotLoged;
    const RedirectIfLoged = props.RedirectIfLoged;
    if(user.isLogedIn){
        if(RedirectIfLoged){
            return(
                <Navigate to={RedirectIfLoged}></Navigate>
            );
        }
        else{

            return TemplateWithSidebar(props.children,props.renderSlideBar);
        }
    }
    else{
        if(RedirectIfNotLoged){
        return(
            <Navigate to={RedirectIfNotLoged}></Navigate>
        );
        }
        else{
           return TemplateWithSidebar(props.children,props.renderSlideBar);
        }

    }
    
}




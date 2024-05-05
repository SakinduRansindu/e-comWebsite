import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ProtectedRout from './Components/ProtectedRoute/ProtectedRout';
import Login from './Pages/login';
import AuthWrapper from './Components/AuthWrapper/AuthWrapper';
import Logout from './Pages/logout';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import BrowseProducts from './Pages/BrowseProducts';
import React from 'react';
import RegisterPage from './Pages/registerPage';
import OrderState from './Pages/OrderState';
import AddProduct from './Pages/AddProduct';
import LandingPage from './Pages/LandingPage';
import ViewProduct from './Pages/ViewProduct';
import SellerOrdersPage from './Pages/SellerOrdersPage';


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage></LandingPage>,
  },
  {
    path:'/manageOrders',
    element:<ProtectedRout authoriezedRoles={["seller"]}><SellerOrdersPage></SellerOrdersPage>  </ProtectedRout>
  },
  {
    path:'/orderStatus',
    element:<ProtectedRout authoriezedRoles={["customer"]}><OrderState></OrderState></ProtectedRout>
  },
  {
    path:'/browse',
    element:<BrowseProducts></BrowseProducts>
  },
  {
    path:'/register',
    element:<RegisterPage></RegisterPage>
  },
  {
    path:'/viewProduct/:pid',
    element:<ViewProduct></ViewProduct>
  },
  {
    path:'/AddProducts',
    element:<ProtectedRout authoriezedRoles={["seller"]}><AddProduct></AddProduct></ProtectedRout>
  },
  {
    path:'/payments',
    element:<div>customer registration form</div>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/logout',
    element:<Logout/>
  }
]);

function App() {
  return (
    <AuthWrapper>
        <RouterProvider router={router}/>
    </AuthWrapper>
  );
}

export default App;

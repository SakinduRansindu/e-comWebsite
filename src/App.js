import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ProtectedRout from './Components/ProtectedRoute/ProtectedRout';
import Login from './Pages/login';
import AuthWrapper from './Components/AuthWrapper/AuthWrapper';
import Logout from './Pages/logout';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import React from 'react';


const router = createBrowserRouter([
  {
    path:'/',
    element:<div>landing page</div>,
  },
  {
    path:'/manageProducts',
    element:<ProtectedRout authoriezedRoles={["seller"]}><div>sellers can add remove or change their products.</div></ProtectedRout>
  },
  {
    path:'/orderStatus',
    element:<ProtectedRout authoriezedRoles={["customer"]}><div>Your orders status will display here</div></ProtectedRout>
  },
  {
    path:'/browse',
    element:<ProductContainer></ProductContainer>
  },
  {
    path:'/sellerRegistration',
    element:<div>seller registration form</div>
  },
  {
    path:'/product',
    element:<div>View product details</div>
  },
  {
    path:'/customerRegistration',
    element:<div>customer registration form</div>
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

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ProtectedRout from './Components/ProtectedRoute/ProtectedRout';
import Login from './Pages/login';
import AuthWrapper from './Components/AuthWrapper/AuthWrapper';
import React from 'react';


const router = createBrowserRouter([
  {
    path:'/',
    element:<div>index page</div>,
  },
  {
    path:'/protected',
    element:<ProtectedRout authoriezedRoles={["admin"]}><div>protected place</div></ProtectedRout>
  },
  {
    path:'/login',
    element:<Login/>
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

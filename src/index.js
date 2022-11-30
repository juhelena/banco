import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Registro from './components/Registro';
import Cliente from './components/Cliente';
import reportWebVitals from './reportWebVitals';

// irmc
// cc

import {
  RouterProvider, 
  createBrowserRouter,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/cadastro',
    element:<Cadastro />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/registro',
    element:<Registro />
  },
  {
    path:'/cliente',
    element:<Cliente />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider
    router={routes}
  />
);

// npm install react-router-dom

reportWebVitals();

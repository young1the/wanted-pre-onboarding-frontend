import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Todos from "./pages/todo/Todos"
import AlreadyLogin from './auth/AlreadyLogin';
import NeedLogin from './auth/NeedLogin';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AlreadyLogin>
      <Login/>
      </AlreadyLogin>,
  },
  {
    path: "/sign-up",
    element: <AlreadyLogin>
      <SignUp/>
      </AlreadyLogin>,
  },
  {
    path: "/todo",
    element: <NeedLogin>
        <Todos/>
      </NeedLogin>
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
], {basename: "https://young1the.github.io/wanted-pre-onboarding-frontend/"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

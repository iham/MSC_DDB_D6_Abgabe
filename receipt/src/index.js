import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from './ErrorPage';
import InfoPage from './InfoPage';
import ProjectsPage from './ProjectsPage'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path:"/info",
            element:<InfoPage />,
          },
          {
            path:"/projects",
            element:<ProjectsPage />,
          },
        ]
      },
    ]
  }
]);

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

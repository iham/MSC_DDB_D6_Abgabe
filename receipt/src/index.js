import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from './ErrorPage';
import InfoPage from './InfoPage';
import StartPage from './StartPage';
import StatsPage from './StatsPage';
import ProjectsPage from './ProjectsPage'
import ReceiptsPage from './ReceiptsPage'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            path:"/",
            element: <StartPage />,
          },
          {
            path:"/receipts",
            element:<ReceiptsPage />,
          },
          {
            path:"/stats",
            element:<StatsPage />,
          },
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

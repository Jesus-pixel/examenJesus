import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Nuevo from "./pages/Nuevo";
import Presupuesto from "./pages/Presupuesto"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,    
  },
  {
    path: "/nuevo",
    element: <Nuevo />
  },
  {
    path: "/presupuesto/ultimo",
    element: <Presupuesto />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
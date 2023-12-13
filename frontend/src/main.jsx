import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import NuevoPresupuesto from "./pages/NuevoPresupuesto";
import UltimoPresupuesto from "./pages/UltimoPresupuesto"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,    
  },
  {
    path: "/nuevo-presupuesto",
    element: <NuevoPresupuesto />
  },
  {
    path: "/ultimo-presupuesto",
    element: <UltimoPresupuesto />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
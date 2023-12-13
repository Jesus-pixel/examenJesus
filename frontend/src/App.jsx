import React,{useState, useEffect} from "react";
import Button from './components/Button'
import axios from "axios";
export default function App () { 

  return (
    <div className="container m-auto">
      <div className="flex flex-col m-auto mt-7">
        <h1 className="text-xl text-center">Aplicacion para el control del presupuesto familiar</h1>
        <div className="container">
          <div className="flex justify-around mt-7">                               
            <a href="/nuevo" className="border border-gray-700 rounded-md px-4 py-1">Nuevo</a>
            <a href="/presupuesto/ultimo" className=" border border-gray-700 rounded-md px-4 py-1 ">Ver último </a>
          </div>
        </div>
      </div>               
    </div>
  )
}

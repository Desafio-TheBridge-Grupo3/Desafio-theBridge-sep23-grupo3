import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
// import Login from "./Login";
import Home from "./Home";
import Metodo from "./Metodo";
import CargaDatos from "./CargaDatos";
//import { UserContext } from "../../context/UserContext"



const Main = () => {



  return (
    <>
    <main>
    <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element ={<Metodo/>}/>
        <Route path="/carga" element={<CargaDatos/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate to={"/"} />} /> 
      </Routes>
    </main>
    </>
  )
};

export default Main;

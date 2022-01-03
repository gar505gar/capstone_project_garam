import React from "react";
import {Outlet, Link } from "react-router-dom";
 import './App.css'
 import Logo from "./routes/imag/Logo.png";
export default function App() {
  return (

    <div >

     <img src={Logo} alt= "Logo"className="logo"/>
      <h1></h1>
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      
       
      <Link to="/home" > الصفحه الرئيسيه </Link> |{" "}
      <Link to="/login" >  تسجيل دخول </Link> |{" "}
      <Link to="/users">تسجيل</Link> |{" "}
      <Link to="/realsteat">ادخال العقارات </Link> |{" "}
        <Link to="/Homepage">العقارات </Link> |{" "}
        <Link to="/Onherservice">خدمات اخرى </Link> |{" "}
      
      
        
        


      </nav>
      <Outlet/>
    </div>
  );
}
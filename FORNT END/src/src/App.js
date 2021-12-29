import React from "react";
import {Outlet, Link } from "react-router-dom";
// import './App.css'
export default function App() {
  return (

    <div >


      <h1>REAL ESTATE GATES</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      
       
      <Link to="/home"> الصفحه الرئيسيه </Link> |{" "}
      <Link to="/users">تسجيل دخول</Link> |{" "}
      <Link to="/realsteat">ادخال العقارات </Link> |{" "}
        <Link to="/Homepage">العقارات </Link> |{" "}
        
      
        
        


      </nav>
      <Outlet/>
    </div>
  );
}
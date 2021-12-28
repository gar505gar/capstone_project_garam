import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>REAL ESTATE GATES</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">الصفحه الرئيسيه</Link> |{" "}
        <Link to="/users">تسجيل دخول</Link> |{" "}
        <Link to="/realsteat">العقارات</Link> |{" "}
        <Link to="/realsteats">الصفحه </Link> |{" "}
        <Link to="/Homepage">ww </Link> |{" "}


      </nav>
      <Outlet/>
    </div>
  );
}
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
        <Link to="/invoices">Home</Link> |{" "}
        <Link to="/expenses">users</Link>
      </nav>
      <Outlet/>
    </div>
  );
      }
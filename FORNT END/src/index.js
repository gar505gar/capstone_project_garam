

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Users from './routes/users';
import Home from './routes/Home';
import Realestate from './routes/Realestate';
//import Mediator from './routes/mediator';
import Invoice from "./routes/invoice";
import Lands from "./routes/Lands"
import Buildings from './routes/buildings';
import Realestates from './routes/Realestates';
import Homepage from './routes/Homepage'; //
import Onherservice from './routes/Onherservice'; 
import Login from './routes/Login';
import Mediator from './routes/mediator';
ReactDOM.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />}>

        <Route path="home" element={<Home />} />
        <Route path="buildings" element={< Buildings/>} />

        <Route path="Homepage" element={<Homepage />} />

        <Route path="Login" element={<Login />} />


        <Route path="realestate" element={<Realestate />}/>

        <Route path="mediator" element={<Mediator />} />

        <Route path="realsteat" element={<Realestate/>}/>
        <Route path="lands" element={<Lands />}/>

        <Route path="Onherservice" element={<Onherservice />}/>


        <Route path="buildings" element ={<Buildings/>}/>
        <Route path=":invoiceId" element={<Realestate />} />
        <Route path="realsteats" element={<Realestates/>}/>
        <Route path="users" element={<Users />}>
          <Route path=":invoiceId" element={<Invoice />} />
           <Route
            index
            element={
              <main style={{ padding: "1rem" }}>


                <p>Select an invoice</p>

             
               
              </main>
            }
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));
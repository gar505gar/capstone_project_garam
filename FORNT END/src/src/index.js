
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Users from './routes/users';
import AllRealestates from './routes/AllRealestates';
import Realestate from './routes/Realestate';
//import Mediator from './routes/mediator';
import MyRealestates from './routes/MyRealestates'; //
import AddMediator from './routes/AddMediator'; 
import Login from './routes/Login';
import Mediator from './routes/mediator';
import MyProfile from './routes/MyProfile';

ReactDOM.render(
  <BrowserRouter>
    <Routes> 

      <Route path="/" element={<App />}>

        <Route path="AllRealestates" element={<AllRealestates />} />

       
        <Route path="MyRealestates" element={<MyRealestates />} />

        <Route path="Login" element={<Login />} />

        <Route path="MyProfile" element={<MyProfile />} />

        <Route path="realestate" element={<Realestate />}/>
        


        <Route path="mediator" element={<Mediator />} />

        <Route path="realsteat" element={<Realestate/>}/>
        
        <Route path="AddMediator" element={<AddMediator />}/>


        

        <Route path="users" element={<Users />}>
         
           
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));
import React from "react";
import {Outlet, Link } from "react-router-dom";
import axios from 'axios'
 import './App.css'
 import Logo from "./routes/imag/Logo.png";
export default function App() {
  axios({
    method:'post',
    url:'/realestate/addn',      //اضافه الصور
    data:{
        id:1,
       location:'سكاكا ',
       space:'1000M',
        img:'https://tekce.net/files/upload/images/apartments-for-sale-in-serik.jpg',
        detials: 'الطابق الثاني يوجد خمسه غرف الايجار الشهري5000 ريال'
    }  
})


axios({
  method:'post',
  url:'/realestate/addn',      //اضافه الصور
  data:{
      id:2,
     location:'مكه ',
     
     space:'1000M',
      img:'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Cover-59-420x230.jpg',
      detials:' الطابق الرابع عدد الغرف سته الايجار الشهري 50000ريال  '
  }  
})
axios({
  method:"post",
  url:"/realestate/addn",      //اضافه الصور
  data:{
      id:3,
     location:"حائل ",
     space:"1666M",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVz1m4pyGRdbf74hEmFTVkDtKrFU2g4WY9ka1We3F6EU7UBjBTIBZUpZ0SbMXaIi7BR-A&usqp=CAU",
      detials :"الطابق الاول عدد الفرف ثلاث الايجار الشهري 3000ريال "
  }  
})







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
        <Link to="/Onherservice"> الوسيط</Link> |{" "}
        <Link to="/mediator">عرض الاوسطاء </Link> |{" "}




        <Link to="realsteats">عرض الاوسطاء </Link> |{" "}//


      
      
        
        


      </nav>
      <Outlet/>
    </div>
  );
}
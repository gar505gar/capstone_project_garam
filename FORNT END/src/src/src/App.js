import React from "react";
import {Outlet, Link } from "react-router-dom";
import axios from 'axios'
 import './App.css'
 import Logo from "./routes/imag/Logo.png";
 import Img from "./routes/imag/Img.png";
 import Img1 from "./routes/imag/Img1.png";
 import Img2 from "./routes/imag/Img2.png";
export default function App() {
  axios({
    method:'post',
    url:'/realestate/addn',      //اضافه الصور
    data:{
        id:1,
       location:"الموقع :سكاكا" ,
       space:'1000:المساحه',
       
        img:'https://aawsat.com/sites/default/files/styles/article_img_top/public/2021/12/02/home%20alone.jpg?itok=sYiGeE-L',
        details: 'الطابق الثاني يوجد خمسه غرف الايجار الشهري5000 ريال   '
    }  
})


axios({
  method:'post',
  url:'/realestate/addn',      //اضافه الصور
  data:{
      id:2,
     location:" الموقع :جده",
     space:'1000:المساحه',
      img:'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Cover-59-420x230.jpg',
      details:' الطابق الرابع عدد الغرف سته الايجار الشهري 50000ريال  '
  }  
})
axios({
  method:"post",
  url:"/realestate/addn",      //اضافه الصور
  data:{
      id:3,
     location:" الموقع :حائل",
     space:"1666:المساحه",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVz1m4pyGRdbf74hEmFTVkDtKrFU2g4WY9ka1We3F6EU7UBjBTIBZUpZ0SbMXaIi7BR-A&usqp=CAU",
      details :"الطابق الاول عدد الفرف ثلاث الايجار الشهري 3000ريال "
  }  
})

axios({
  method:"post",
  url:"/realestate/addn",      //اضافه الصور
  data:{
      id:4,
     location:" الموقع :ابها",
     space:"1666:المساحه",
      img:"https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
      details :"الطابق الاول عدد الغرف ثلاث الايجار الشهري 3000ريال "
  }  
})


axios({
  method:"post",
  url:"/realestate/addn",      //اضافه الصور
  data:{
      id:5,
     location:" الموقع: تبوك",
     space:"1666:الساحه",
      img:"https://media.carusohomes.com/46/2020/10/14/IMG_5219.1920x1440.jpg",
      details :"الطابق الاول عددالغرف ثلاث الايجار الشهري 3000ريال"
      
  }  
})




axios({
  method:"post",
  url:"/realestate/addn",      //اضافه الصور
  data:{
      id:6,
     location:" الموقع: الرياض",
     space:"1666:المساحه",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQa4YDXqNlGSleOyMPyVLHKvHVyMcoqV-Jg&usqp=CAU",
      details :"الطابق الاول عدد الغرف ثلاث الايجار الشهري 3000ريال "
  }  
})



















  return (
<>
<div className="b">
    <a href="https://twitter.com/aqaar_ksa1?lang=ar/">
          <img src={Img} alt= "img"className="img1" />   
         </a>
         <a href="https://realestatejor.com/?gclid=CjwKCAiAxJSPBhAoEiwAeO_fP3eqZjIjFvyOCkmbbrd3Bni5uKZN8Adv19mnMz2WSnDyWc5qE0VrRxoCIQkQAvD_BwE/">
          <img src={Img1} alt= "img1"className="img1"/>  
          </a>
          <a href="https://www.youtube.com/watch?v=g2Vr0_e-Tbs/">
          <img src={Img2} alt= "img2"className="img1"/> 
          </a>
   </div>
    <div >
   
         
     <img src={Logo} alt= "Logo"className="logo"/>
      <h1></h1>
      
      <div >  
    

       </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      
       
      <Link to="/AllRealestates" ><button >(AllRealestates) معرض العقارات </button></Link> {"            "}
      <Link to="/login" ><button >(Login In) تسجيل دخول </button></Link> {" "}

      <Link to="/users"><button >(Sign up)تسجيل </button></Link> {" "}
      <Link to="/realsteat"><button > (Register New Realestate)ادخال العقارات </button></Link> {" "}
     
        <Link to="/MyRealestates"><button > (Show My Realestates)العقارات </button></Link> {" "}

        <Link to="/AddMediator"><button > (Register New Mediator) الوسيط</button></Link> {" "}
        <Link to="/mediator"><button > (Show Mediators)عرض الاوسطاء </button></Link> {" "}

        <Link to="/MyProfile"><button >(My Profile) ملف الشخصي</button> </Link> {" "}




        
        
        
       

      
      
        
        


      </nav>
      <Outlet/>
    
 

    </div>

    </>


  );
}
import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function Home(){
    return(
        <main style={{padding :"1rem 0"}}> 
        {/* <h2 className= 'Work-title'> <span>MyHomepage </span> Homepage</h2>

          <div className='flexer'>
           {this.state.services.map(item=> (
           <div className="card"key={item.id}>
           <div className="contianer">
               <img className="img"src ={item.img}/>
               <h4>{item.category} </h4>
               <hr className="line"/>
               <p>{item.description} </p>
                <div class= "tooltip">
                   <a href={item.Link}></a>
                   <span class="tooltiptext"> انتقال</span>

                </div>
              <br></br>
              <a href="housemaid">Home</a>
           </div>
           </div>
           ))}
           </div>
          )
           
        ; */}
         



        {/* <Link to="/users">اراضي </Link> |{" "}
        <Link to="/users">مباني </Link> |{" "}
        <Link to="/users">خدمات اخرى</Link> |{" "} */}
         </main>
     );
 }
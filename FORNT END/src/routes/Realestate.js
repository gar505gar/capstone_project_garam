import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Realsteat() {

  const [id, setiid] = useState("")
  const [location, setlocation] = useState("")
  const [space, setspace] = useState("")
 

  // const [myUser, setMyUser]=useState({id:"", name:"", email:"", mobilenambwr:""})


  function Hhandleiid(event) {

    setiid((event.target.value));

}
function handlelocation(event) {

  setlocation((event.target.value));

}
function handlespace(event) {

  setspace((event.target.value));


}






let nuwRealestate = {
  id : id ,
  location : location,
  space:space,
}

// useEffect(()=>{
//   axios.get("api/User")
//    .then(response=>{
//      console.log(response.data)
//      setMyUser(response.data[0])
//   })
//   return()=>{}
// },[])
function handleClick(event){
  event.preventDefault();
  console.log("add func")
 axios({
   method:'post',
   url:'/api/Realstate/add',
   data:nuwRealestate
 });
}

    return (
      <main style={{ padding: "1rem 0" }}>

        <h2></h2>
        <form >
        <hr />
       <div>
             {/* <label> id </label>
                <input type="text" name="id" placeholder="id" size="15" onChange={Hhandleiid} />
                <hr />
                <label> location</label>
                <input type="text" name="location" placeholder="location" size="15" onChange={handlelocation} />
                <hr />
                <label>  </label>
                <input type="text" name="space" placeholder="space" size="l5" onChange={handlespace} />
                <input type="submit" value="submit"/>{" "}
               */}
                <Link to ="/lands"> 
                <button>مباني</button>
                </Link>
                  <button onClick={handleClick}>اراضي</button>{" "}
                  <button onClick={handleClick}>خدمات اخرى</button>{" "}
             </div>
             </form>
      </main>


    );
  }
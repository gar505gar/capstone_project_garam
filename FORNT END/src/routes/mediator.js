/*import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Mediator() {

  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobilenambwr, setmobilenambwr] = useState("")

   const [mymediator, setMymediator]=useState({id:id, name:name, email:email, mobilenambwr:mobilenambwr})


  function handleid(event) {

    setid((event.target.value));

}
function handlename(event) {

  setname((event.target.value));

}
function handleemail(event) {

  setemail((event.target.value));


}

function handlemobilenambwr(event) {

  setmobilenambwr((event.target.value));

}


let nuwmediator = {
  id : id ,
  name :name ,
email:email,
mobilenambwr:mobilenambwr
}
 useEffect(()=>{
  axios.get("api/mediator")
    .then(response=>{
      console.log(response.data)
      setMymediator(response.data)
   })
   return()=>{}

 },[])
 


return(

    <form>
 <div>
  
  
<h2>my Mediator details are:  {JSON.stringify(mymediator)}</h2>

</div>
</form>

)

};*/
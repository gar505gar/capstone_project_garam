import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Mediator() {
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobile, setmobile] = useState("")
   const [mymediator, setMymediator]=useState({id:id, name:name, email:email, mobile:mobile})
    const[data ,setData]=useState([{name:""}]);
  function handleid(event) {
    setid((event.target.value));
}
function handlename(event) {
  setname((event.target.value));
}
function handleemail(event) {
  setemail((event.target.value));
}
function handlemobile(event) {
  setmobile((event.target.value));
}
let nuwmediator = {
  id : id ,
  name :name ,
email:email,
mobile:mobile
}
//  useEffect(()=>{
//   axios.get("api/mediator")
//     .then(response=>{
//       console.log(response.data)
//       setMymediator(response.data)
//    })
//    return()=>{}
//  },[])
 function handleAddMediator(event){
  event.preventDefault();
  console.log("nuwmediator",nuwmediator)
 axios({
   method:'post',
   url:'/api/mediator/add',
   data:nuwmediator
 });
}


  // //fun Display admin name
  useEffect(()=>{
    axios.get("/api/mediator")
    .then(result=>setData(result.data));
    console.log(data);
    },[]);



return(

 <div>
   {/* <div className="AdminCss">
               <h2><b><u> ADMIN NAME..</u></b></h2>
               {data.map(med_id=>{
                 return <div>
                   <p>{name.name}</p>
                 </div>
               })}
       </div> */}
 {/* <main style={{ padding: "1rem 0" }}> */}
 <main class="Gg">
{/* <h2>Mediator</h2>
  <form onSubmit={handleAddMediator}>
<hr />
<div>
        <label> id </label>
        <input type="text" name="id" placeholder="id" size="15" onChange={handleid} />
        <hr />
        <label> name</label>
        <input type="text" name="name" placeholder="name" size="15" onChange={handlename} />
        <hr />
        <label> Email </label>
        <input type="text" name="email" placeholder="email" size="l5" onChange={handleemail} />
         <label> phone </label>
        <input type="text" name="mobile" placeholder="mobile" size="l5" onChange={handlemobile} />
        <input type="submit" value="submit"/>
     </div>
     </form> */}
     <h2> Mediator Information بيانات الوسيط </h2>
     <div className="AdminCss">
               {/* <h2><b><u> ADMIN NAME..</u></b></h2> */}
               {data.map(med_id=>{
                 return <div>
                   <p>{med_id.med_id}</p>
                   <p>{med_id.name}</p>
                   <p>{med_id .email}</p>
                   <p>{med_id .mobile}</p>
                 </div>
               })}
       </div>

</main>
</div>
)
};




































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
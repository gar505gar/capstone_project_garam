import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {

  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobilenambwr, setmobilenambwr] = useState("")

  // const [myUser, setMyUser]=useState({id:"", name:"", email:"", mobilenambwr:""})


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


let nuwUser = {
  id : id ,
  name :name ,
email:email,
mobilenambwr:mobilenambwr
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
   url:'/api/User/add',
   data:nuwUser
 });
}

    return (
      <main style={{ padding: "1rem 0" }}>

        <h2>Expenses</h2>
          <form onSubmit={handleClick}>
        <hr />
       <div>
                <label> id </label>
                <input type="text" name="id" placeholder="id" size="15" onChange={handleid} />
                <hr />
                <label> name</label>
                <input type="text" name="name" placeholder="name" size="15" onChange={handlename} />
                <hr />
                <label>  </label>
                <input type="text" name="email" placeholder="email" size="l5" onChange={handleemail} />

                 <label> mwbayil </label>
                <input type="text" name="mobilenambwr" placeholder="mobilenambwr" size="l5" onChange={handlemobilenambwr} />
     
                <input type="submit" value="submit"/>
             </div>
             </form>
      </main>


    );
  }
//export default users

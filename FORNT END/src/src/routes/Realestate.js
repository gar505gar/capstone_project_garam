import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
 import { Link } from "react-router-dom";
export default function Realsteat() {

  const [id, setiid] = useState("")
   const [location, setlocation] = useState("")
  const [space, setspace] = useState("")
   const[img,setimg] =useState("")
   const[Detials,setDetials] =useState("")
   const[med_id,setMed_id] =useState("")
   const [user,setUser] = useState()
   const [email, setEmail] = useState(localStorage.getItem('email'))

   
   
  const [myUser, setMyUser]=useState({id:"", Location:"", space:"", img:""  ,Detials:"" })


  function handleid(event) {

    setiid((event.target.value));

}

function handlemed_id(event) {

  setMed_id((event.target.value));

}
function handlename(event) {

  setlocation((event.target.value));}

function handlemobilenambwr(event) {

  setspace((event.target.value));

}


function handleimg(event) {
  setimg((event.target.value));

}

function handleDetials(event) {
  setDetials((event.target.value));

}



let nuwRealestate = {
  id : id ,
  location : location,
  space:space,
  img:img,
  Detials:Detials,
  mediator:{id:med_id} , 
  users:user

}
console.log(nuwRealestate)
useEffect(()=>{
  axios.get("api/User")
   .then(response=>{
     console.log(response.data)
     setMyUser(response.data[0])
  })
  return()=>{}
},[])
function handleClick(event){
  event.preventDefault();
  console.log("add func")
 axios({
   method:'post',
   url:'/realestate/addn',
   data:nuwRealestate
 });
}
useEffect(()=>{

  setEmail(localStorage.getItem('email'))
  
        
             axios.get(`api/User/getuserbyemail/${email}`)
              .then(response=>{
                setUser(response.data) 
                console.log("user", user)
               
             })
  console.log("email", email) ;
 },[])

    return (
     
      <>
      {email ?  (
       <main class="Gg">
        <h2> Enter New Realestateادخال عقار</h2>
          <form onSubmit={handleClick}>
       
       <div>
                <label> id </label>
                <input type="text" name="id" placeholder="id" size="15" onChange={handleid} />
                
                <label> Location</label>
                <input type="text" name="Location" placeholder="Location" size="15" onChange={handlename} />
                
                
                 <label> space </label>
                <input type="text" name="space" placeholder="space" size="l5" onChange={handlemobilenambwr} />
     
                <label> img </label>
                <input type="text" name="img" placeholder="img" size="l5" onChange={handleimg} />
     
                <label> Detials </label>
                <input type="text" name="Detials" placeholder="Detials" size="l5" onChange={handleDetials} />

                <label> med_id </label>
                <input type="text" name="med_id" placeholder="med_id" size="l5" onChange={handlemed_id} />

               
                <input type="submit" value="submit"/>

                <Link to="/Homepage"><button>العقارات </button></Link> 

             </div>
             </form>
      </main>):(<div> You need to login before </div>)}

</>
    );
  }



// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Realsteat() {

//   const [id, setiid] = useState("")
//   const [location, setlocation] = useState("")
//   const [space, setspace] = useState("")
 

//   const [myUser, setMyUser]=useState({id:"", name:"", email:"", mobilenambwr:""})


//   function Hhandleiid(event) {

//     setiid((event.target.value));

// }
// function handlelocation(event) {

//   setlocation((event.target.value));

// }
// function handlespace(event) {

//   setspace((event.target.value));


// }






// let nuwRealestate = {
//   id : id ,
//   location : location,
//   space:space,
// }

// useEffect(()=>{
//   axios.get("realestate")
//    .then(response=>{
//      console.log(response.data)
//      setMyUser(response.data[0])
//   })
//   return()=>{}
// },[])
// // function handleClick(event){
// //   event.preventDefault();
// //   console.log("add func")
// //  axios({
// //    method:'post',
// //    url:'/api/Realstate/add',
// //    data:nuwRealestate
// //  });
// // }
// function handleClick2(){
//   console.log("in fun")
//   console.log(nuwRealestate)
//   axios({
//   method:'post',
//   url:'api/Realstate/add',
//     data: nuwRealestate,
//   });
//   }
//     return (
//       <main style={{ padding: "1rem 0" }}>

//         {/* <h2>{JSON.stringify(myUser)}</h2> */}
//         <form >
//         <hr />
//        <div>
//               <label> id </label>
//                 <input type="text" name="id" placeholder="id" size="15" onChange={Hhandleiid} />
//                 <hr />
//                 <label> location</label>
//                 <input type="text" name="location" placeholder="location" size="15" onChange={handlelocation} />
//                 <hr />
//                 <label>  </label>
//                 <input type="text" name="space" placeholder="space" size="l5" onChange={handlespace} />
//                 <input type="submit" value="submit" onClick={handleClick2}/>{" "}
               
//                 {/* <Link to ="/lands"> 
//                 <button>اراضي</button>
//                 </Link>
//                   <Link to = "/buildings">
//                    <button> مباني</button>
//                   </Link>
                  


//                   <button onClick={handleClick}>خدمات اخرى</button>{" "} */}

//              </div>
//              </form>
//       </main>


//     );
//   }
// }
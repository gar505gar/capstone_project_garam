import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function AddMediator() {
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobile, setmobile] = useState("")
   
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
let AddnewMediator = {
    id : id ,
    name :name ,
  email:email,
  mobile:mobile
  }
  function handleClickAddMediator(e){
    e.preventDefault();
    axios({
    method:'post',
    url:'api/mediator/add',
    data: AddnewMediator,
    });
    }
    return (
        <main class="Gg">
           <div className='g1'>


        {/* // <div>
        //     <form onSubmit={(e)=>{handleClickMyOnhersrvice(e)}}>
        //     <h3>ADD Ticket..</h3> */}

        <from>  
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
        <input type="submit" value="submit" onClick={handleClickAddMediator}/>
       
     </div>
  
</from> 
</div>
</main>

    );
}





           {/* <label htmlFor="id">User Name:</label>
           <br />
           <input type="text" placeholder="User Name" id="name" name="name" onChange={handleUserName} />
           <br />
           <label htmlFor="name">Ticket id: </label>
           <br />
           <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleTicketId} />
           <br />
           <label htmlFor="name">Ticket Name: </label>
           <br />
           <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleName} />
           <br />
           <label htmlFor="name">Ticket Price: </label>
           <br />
           <input type="text" placeholder="Ticket Price.." id="name" name="name" onChange={handlePrice} />
           <br />
           <label htmlFor="name">Event id: </label>
           <br />
           <input type="text" placeholder="Event id:.." id="name" name="name" onChange={handleId} />
           <br></br> */}
           {/* <label htmlFor="text">Event Name: </label>
           <br />
           <input type="text" placeholder="EventName.." id="text" name="text" onChange={handleEventName} />
           <br />
           <label htmlFor="text">Location: </label>
           <br />
           <input type="text" placeholder="Location.." id="text" name="text" onChange={handleLocation} />
           <br />
           <label htmlFor="text">Time: </label>
           <br />
           <input type="text" placeholder="Time.." id="text" name="text" onChange={handleTime} />
           <br />
           <label htmlFor="text">Duration: </label>
           <br />
           <input type="text" placeholder="Duration.." id="text" name="text" onChange={handleDuration} />
           <br /> */}
           {/* <input type="submit" value="Add"  ></input>
           <br></br>
           <br></br>
           </form>
     </div>
     );
    }
    export default  EnterTicket; */}
    










//  export default function Onherservice() {
//    return (
// <div>
// <h1>اختيار</h1>
//  <button> اضافة</button>


//  <button> حذف</button>
//  <label>ارفق رقم القطعه</label>

//  <p></p>
 



// /<input></input>
// </div>
//    )
// }

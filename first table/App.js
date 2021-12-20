import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  //const [MyArtwork, setMyArtwork] = useState({ id: "", artistName: "", artworkTitle: "" })
  const [Myusers, setMyUsers] = useState({ Id: "", name: "" ,email:"" ,mobilenambwr:""})//
  useEffect(() => {
    axios.get("api/User")
      .then(response => {
        console.log(response.data)
        setMyUsers(response.data[1])
      })
    return () => { }
  }, [])
  function handleClick() {
    axios({
      method: 'post',
      url: 'api/User/add',
      data: {
        id: 4,
        name: "REEM",
        email: "dfg@fgbn",
        mobilenambwr:1234567
      }
    });
  }
  function handleClickDel() {
    axios({
      method: 'delete',
      url: "/api/User/delete/4"
    })
  }
  ///museum..
  // useEffect(() => {
  //   axios.get("/api/museum")
  //     .then(response => {
  //       console.log(response.data)
  //       setMyMuseum(response.data[1])
  //     })
  //   return () => { }
  // }, [])
  // function handleClick2() {
  //   axios({
  //     method: 'post',
  //     url: 'api/museum/add',
  //     data: {
  //       muesumId: "15",
  //       location: "Makkah"
  //     }
  //   });
  // }
  // function handleClickDel2() {
  //   axios({
  //     method: 'delete',
  //     url: "/api/museum/delete/15"
  //   })
  // }
  //to this
  return (
    <div>
      <br></br>
      <br></br>
      <h2>my Usar details are:  {JSON.stringify(Myusers)}</h2>
      <button onClick={handleClick}>Post to Spring</button><br></br>
      <button onClick={handleClickDel}>Delete to Spring</button>
     
     
     {/* <h2>my Artwork details are:  {JSON.stringify(MyMuseum)}</h2>
      <button onClick={handleClick2}>Post to Spring</button><br></br>
      <button onClick={handleClickDel2}>Delete to Spring</button> */}
    </div>
  )
}

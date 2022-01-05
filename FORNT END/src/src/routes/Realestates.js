// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// //import { Card } from "stream-chat-react";
// import axios from "axios";
// export default class Realestates extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//            RelList: [],
//         };
//     }
//     componentDidMount() {
//         axios.get("realestate").then(response => {
//             const RelList = response.data
//             this.setState({ RelList });
//         });

//         axios({
//          method:"post",
//          url:"/realestate/add",      //اضافه الصور
//          data:{
//              id:1,
//             location:"سكاكا ",
//             space:"1000M",
//              img:"https://tekce.net/files/upload/images/apartments-for-sale-in-serik.jpg",
             
//          }  
//      })





//     }
//     deleteSpecialist(id) {
//         //console.log("inside deleteHandler")
//         axios.delete(`/realestate/delete/${id}`)
//             .then(res => {
//                 const RelList = this.state.RelList.filter(item => item.id !== id);
//                 this.setState({ RelList });
//            })
//     }
//     render() {
//         return (

//             <main class="Gg">
//             <div>
//                 <table >
//                     <thead>
//                         <tr>
//                             <th >id</th>
                            
//                             <th >location</th>
//                             <th >space</th>
                            
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.RelList.map((item => (
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
                                
                                
//                                 <td><img height="100" width="100" src={item.img} /></td>            
//                                   {/* عرض الصور */}

//                                 <td>{item.location}</td>
//                                 <td>{item.mediator.id}</td>       
                               
//                                 {/* <td>{item.Realestate.id}</td>
//                                   //بيانات الوسيط تظهر في العقار
//                                 <td>{item.Realestate.email}</td>
//                                 <td>{item.Realestate.mobile}</td>

//                                 */}
//                                 <td>{item.space}</td>
//                                 {/* <td><button ></button></td> */}
//                                 <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete</button></td>
//                             </tr>
//                         )))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             </main>
//         )}}





























// import React, { Component } from 'react'
// import axios from 'axios';

// export default class Realestates extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             Reall: [],
//         };
//     }
//     componentDidMount() {
//         axios
//             .get("realsteat")
//             .then(result => {
//                 const Reall = result.data
//                 this.setState({ Reall });
//             });
//     }
//     deleteReall(id) {
//         console.log("in")
//         axios.delete(`/realsteat/delete/${id}`)
//             .then(res => {
//                 const Reall = this.state.Reall.filter(item => item.id !== id);
//                 this.setState({ Reall })
//             })
//     }
//     render() {
//         return (<div>
//             <h3>mmmm</h3>
//             {this.state.Reall.map((item => (
//                 <div key={item.id}>
//                     <h2>{item.location}</h2>
//                     <p>{item.space}</p>
//                     {/* <p>{item.users}</p> */}
//                     <button onClick={(e) => this.deleteReall(item.id, e)}>Delete</button>
//                     <p>********</p>
//                 </div>
//             )))}
//         </div>
//         )
//     }
// }


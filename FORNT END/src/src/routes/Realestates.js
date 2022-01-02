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
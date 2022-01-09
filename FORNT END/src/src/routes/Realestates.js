// import React ,{Component} from 'react'
// import axios from 'axios';
// export default class Realestates extends Component{
// constructor(props){
//     super(props)
//     this.state={
//         Rele:[],
//     };
// }
// componentDidMount(){
//     axios.get("api/mediator").then(res=>{
//         const Rele=res.data
//         this.setState({Rele})
//     });
// }
// deleteRele(med_id){
//     axios.delete(`api/mediator/delete/${med_id}`)
//     .then(res=>{
//         const Rele=this.state.Rele.filter(item=> item.med_id !== med_id);
//         this.setState({Rele})
//     })
// }
// render(){
// return(<div>
//     <h1>Feedback</h1>
//     <table>
//         <tbody>
//     {this.state.Rele.map((item=>(
//         <div key={item.med_id}>
//             <p>{item.name}</p>
//             <p>{item.email}</p>
//              <p>{item.mobile}</p> 
//             {/* <p>{item.user.mobile}</p>
//             <p>{item.services.category}</p> */}
//             {/* <p>{}</p> */}
//             <button onClick={(e) => this.deleteRele(item.med_id, e)}>Delete</button>
//                 </div>
//     )))}
//     </tbody>
// </table>
// </div>)
// }
// }
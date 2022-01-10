import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { Card } from "stream-chat-react";
import axios from "axios";
export default class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :localStorage.getItem('email'), 
            user:{} ,
        };
    }
    componentDidMount() {
        let  email = localStorage.getItem('email');
        axios.get(`api/User/getuserbyemail/${email}`).then(response => {
            console.log(response.data)
            const User = response.data
            this.setState({user:User});
        });



    }
    deleteUser(id){
        localStorage.removeItem('email')
        axios.delete(`api/User/delete/${id}`)
        .then(res=>{
            window.location.reload();
        })
    }
    render() {
        return (
        <>
    {this.state.email ? (
            <main class="Gg">
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >NAME</th>
                            
                            <th >EMAIL</th>
                            <th >PHONE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <div key={this.state.user.userId}>
                            <p>{this.state.user.name}</p>
                            <p>{this.state.user.email}</p>
                            <p>{this.state.user.mobile}</p> 
                            {/* <p>{item.user.mobile}</p>
                            <p>{item.services.category}</p> */}
                            {/* <p>{}</p> */}
                            <button onClick={(e) => this.deleteUser(this.state.user.userId, e)}>Delete</button>
                </div>
                    </tbody>
                </table>
            </div>
            </main>):(<h1>You need to login before</h1>) }
            </>
        )}}

import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { Card } from "stream-chat-react";
import axios from "axios";
export default class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem('email'),
            user: {},
        };
    }
    componentDidMount() {
        let email = localStorage.getItem('email');
        axios.get(`api/User/getuserbyemail/${email}`).then(response => {
            
            this.setState({ user: response.data });
        });



    }
    deleteUser(id) {
        localStorage.removeItem('email')
        axios.delete(`api/User/delete/${id}`)
            .then(res => {
                window.location.reload();
            })
    }
    render() {
        return (
            <>
                {this.state.email ? (
                    <main className="Gg">
                        <div>
                            <table >
                                <thead>
                                    <tr>
                                        <th >NAME</th>

                                        <th >EMAIL</th>
                                        <th >PHONE</th>
                                        <th >Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.user.name}</td>
                                        <td>{this.state.user.email}</td>
                                        <td>{this.state.user.phone}</td>
                                        <td><button onClick={(e) => this.deleteUser(this.state.user.userId, e)}>Delete</button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </main>) : (<h1>You need to login before</h1>)}
            </>
        )
    }
}

import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { Card } from "stream-chat-react";
import axios from "axios";
export default class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           UserList: [],
        };
    }
    componentDidMount() {
        axios.get("api/User").then(response => {
            const UserList = response.data
            this.setState({ UserList });
        });



    }
    deleteSpecialist(userId) {
        //console.log("inside deleteHandler")
        axios.delete(`api/User/delete/${userId}`)
            .then(res => {
                const UserList = this.state.UserList.filter(item => item.userId !== userId);
                this.setState({ UserList });
           })
    }
    render() {
        return (

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
                        {this.state.UserList.map((item => (
                            <tr key={item.userId}>
                                <td>{item.userId}</td>
                               <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><button onClick={(e) => this.deleteSpecialist(item.userId, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>
            </main>
        )}}

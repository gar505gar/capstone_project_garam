import React, { Component } from "react";
import axios, { Axios } from "axios"
//import { Card } from "stream-chat-react";
export default class AllRel extends Component {
    constructor(props) {
        super(props);
        this.state = {
           RelList: [],
        };
    }
    componentDidMount() {
        axios.get("realestate").then(response => {
            const RelList = response.data
            this.setState({ RelList });
        });
    }
    deleteSpecialist(id) {
        //console.log("inside deleteHandler")
        axios.delete(`/realestate/delete/${id}`)
            .then(res => {
                const RelList = this.state.RelList.filter(item => item.id !== id);
                this.setState({ RelList });
           })
    }
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >id</th>
                            
                            <th >location</th>
                            <th >space</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.RelList.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                
                                
                                {/* <td><img height="100" width="100" src={item.image} /></td> */}
                                <td>{item.location}</td>
                               
                                <td>{item.space}</td>
                                {/* <td><button ></button></td> */}
                                <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>
        )}}
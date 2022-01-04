import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { Card } from "stream-chat-react";
import axios from "axios";
export default class Homepage extends Component {
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

        axios({
         method:"post",
         url:"/realestate/add",      //اضافه الصور
         data:{
             id:1,
            location:"سكاكا ",
            space:"1000M",
             img:"https://tekce.net/files/upload/images/apartments-for-sale-in-serik.jpg",
             
         }  
     })





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
                                
                                
                                <td><img height="100" width="100" src={item.img} /></td> عرض الصور


                                <td>{item.location}</td>
                                <td>{item.mediator.id}</td>       
                               
                                {/* <td>{item.Realestate.id}</td>
                                  //بيانات الوسيط تظهر في العقار
                                <td>{item.Realestate.email}</td>
                                <td>{item.Realestate.mobile}</td>

                                */}
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
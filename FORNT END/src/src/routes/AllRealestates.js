import React, { Component } from 'react'
import axios from 'axios';
import './hom.css'


export default class AllRealestates extends Component {
  constructor(props){
  super(props)
this.state={
  hom:[],
};
}

componentDidMount(){
  axios.get("realestate")
  .then(response=>{
const hom=response.data
this.setState({hom})
console.log(response.data);

 });}
// axios({
// method :"post",
// url:"realestate/addn",
// data:{
//   id:1,
//   location:"سكاكا ",
//   space:"1000M",
//    img:"https://tekce.net/files/upload/images/apartments-for-sale-in-serik.jpg",
//    Detials: "gggg"

// }


// })
// axios({
//   method:"post",
//   url:"/realestate/add",      //اضافه الصور
//   data:{
//       id:2,
//      location:"مكه ",
//      space:"1666M",
//       img:"https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Cover-59-420x230.jpg",
//   }  
// })

// axios({
//   method:"post",
//   url:"/realestate/add",      //اضافه الصور
//   data:{
//       id:3,
//      location:"حائل ",
//      space:"1666M",
//       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVz1m4pyGRdbf74hEmFTVkDtKrFU2g4WY9ka1We3F6EU7UBjBTIBZUpZ0SbMXaIi7BR-A&usqp=CAU",
//       Detials:"الطابق الاول عدد الفرف ثلاث الايجار الشهري 3000ريال "
//   }  
// })



// }

  render() {
    return (
      <>
        <h2 className='work-title'><span></span>  </h2>
                <div className='flexer' >
                    {this.state.hom.map(item => (
                        <div className='card' key={item.id}>
                            <div className='contianer'>
                                <img className='img' src={item.img} />
                                <h4 >{item.location}</h4>
                                <hr className='line' />
                                <p>{item.detials}</p>
                                <p>{item.space}</p>
                                <div class="tooltip">
                                </div>
                                <br></br>

                            </div>
       


                        </div>



                    ))}
                </div>
            </>)
    }
}
      

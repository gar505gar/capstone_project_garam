import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
// import { Form, Button } from 'react-bootstrap'
import axios from "axios"
// import './styleForm.css'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   /*  const authContext = useContext(AuthContext) */
    function login(e) {
        let user = {
            email: email,
            password: password,
            
          
        }
        e.preventDefault();
        console.log({ email, password });
        //Send Api request to validate data and get token
        axios({
            method: 'post',
            url: 'api/security/login',
            data: user
        }).then((response)=>{alert(response.data)
            if(response.data == " Authenticated"){
                localStorage.setItem('email', email);
            }else{
                localStorage.setItem('email', "");
            }
        
        });
        
    }
    return (
        // <main style={{ padding: "1rem 0" }}>

        <main class="Gg">
            
        <h2>Log In تسجيل دخول</h2>
          <form >
        <br />
       <div>
                <label> ايميل  Email</label>
                <input type="email" id="#{label}" required="required" onChange={ e=>setEmail(e.target.value)}/>
                <br />
                <label>  Password كلمه المرور</label>
                <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                <br />
                <div class="button-container">
                            <button onClick={login}><span>دخول</span></button>
                        </div>
                        <div class="footer"><a href="#"> Forgot Password نسيت كلمه المرور</a></div>
             </div>
             </form>
      </main>
    )
}

import React from 'react'
import { useState } from "react"
import { Link , useNavigate} from 'react-router-dom'


export default function Login() {
  const[credentials,setcredentials] = useState({email:"",password:""})
let navigate = useNavigate()
      const handleSubmit =async (e)=>{
          e.preventDefault();
          const response = await fetch("http://localhost:5000/api/loginuser",{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({email:credentials.email,password:credentials.password})
          })
          const json = await response.json()
          console.log(json);
  
          if(!json.success){
              //this part is used jab apan success return karte hai in createUser when credentials entered our correct
              //ya failure aata hai
              alert("Enter Valid Credentials")
          }
          if(json.success){
            localStorage.setItem("userEmail",credentials.email);
            localStorage.setItem("authtoken",json.authTokenValue);
            console.log(localStorage.getItem("authtoken"));
            navigate("/");

          }
      }
  const onChange=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
      //here evnt is an object from the input field 
      //used to update the credential object
      
  }
  return (
    <div>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email' value={credentials.email} onChange={onChange}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name='password' value={credentials.password} onChange={onChange}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/createuser" className='m-3 btn btn-danger'>I am a new user</Link>
      </form>
    </div>
    </div>
  )
}

import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate()
    const[credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json = await response.json()
        console.log(json);

        if(!json.success){
            //this part is used jab apan success return karte hai in createUser when credentials entered our correct
            //ya failure aata hai
            alert("Enter Valid Credentials")
        }
        else {
          navigate("/login");
        }
    }
const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3 mt-3">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            name='name' value={credentials.name} onChange={onChange}
            placeholder="Enter username"
          />
          
        </div>
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
        <div className="form-group mb-3 mt-3">
          <label htmlFor="username">Address</label>
          <input
            type="text"
            className="form-control"
            name='geolocation' value={credentials.geolocation} onChange={onChange}
            placeholder="Enter username"
          />
          
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
    </>
  );
}

//cmon man 
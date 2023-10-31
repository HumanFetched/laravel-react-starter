import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
  const emailRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,     
    }
    axiosClient.post('/twofactor', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }

  return (
    <>
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">2FA Authentication Request</h1>

          { message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }

          <input ref={emailRef} type="email" placeholder="Email"/>
     
          <button className="btn btn-block">Request Otp</button> 
          {/* <button className="btn btn-block"><Link to="/submitotp">Request Otp</Link></button>      */}
          {/* <p className="message">Not registered? <Link to="/signup">Create an account</Link></p> */}
        </form>
      </div>
    </div>

    </>
    
  )
}

import React, { useState } from "react";
import Header from '../components/header';
import { auth, analytics } from "../components/firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setUserProperties } from "firebase/analytics";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerName, setName] = useState("");
  const [user, setUser] = useState({ });

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const navigate = useNavigate();

  const register = async (e) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPass);
      setUserProperties(analytics, { name: registerName });
      navigate('/signin')
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <React.Fragment>
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>EcoSwitch Sign Up</title>
        
        <link rel="icon" type="image/png" sizes="16x16" href="plugins/images/favicon.png"/>
        <link href="plugins/bower_components/chartist/dist/chartist.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"/>
        <link href="css/signin.css" rel="stylesheet"/>
      </head>

      <body className="login-page">
        <Header />
        <main>
          <div className="login-block">
            <img src="images/ecoswitchicon.png" alt="EcoSwitch Icon" style={{ height: 70 }}/>
            <h1>Sign up for an account</h1>
            <form>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user ti-user"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Your name" onChange={(event) => {setName(event.target.value)}}/>
                </div>
              </div>
              
              <hr className="hr-xs"/>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope ti-email"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Your email address" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                </div>
              </div>

              <hr className="hr-xs"/>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock ti-unlock"></i>
                  </span>
                  <input type="password" className="form-control" placeholder="Choose a password" onChange={(event) => {setRegisterPass(event.target.value)}}/>
                </div>
              </div>
              <button className="btn btn-success btn-block" type="submit" onClick={ register }>Sign Up</button>
            </form>
          </div>
          <div className="login-links">
            <p className="text-center">
              Already have an account? <a className="txt-brand" href="signin">Sign In</a>
            </p>
          </div>
        </main>
      </body>
    </React.Fragment>
  );
}

export default SignUp;
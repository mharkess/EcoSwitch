import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle } from '../firebase';
import Header from '../components/header';

// https://blog.logrocket.com/user-authentication-firebase-react-apps/

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <head>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <title>EcoSwitch Sign In</title>
          
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
              <h1>Log into your account</h1>
              <form action="#">
                <hr className="hr-xs"/>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope ti-email"></i></span>
                    <input type="text" className="form-control" placeholder="Email address"/>
                  </div>
                </div>
                <hr className="hr-xs"/>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock ti-unlock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </div>
                <button className="btn btn-success btn-block" type="submit">Sign in</button>
                <div className="login-footer">
                  <h6>Or</h6>
                  <button className="button" onClick={ signInWithGoogle } style={{ padding: 10 }}><i className="fab fa-google" style={{ padding: 10, marginLeft: -10 }}></i>Sign in with Google</button>
                </div>
              </form>
            </div>
            <div className="login-links">
              <p className="text-center">Don't have an account? <a className="txt-brand" href="signup">Sign Up</a></p>
            </div>
          </main>
        </body>
    </React.Fragment>
    );
  }
}

export default SignIn;
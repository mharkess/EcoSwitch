import React, { Component, setState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './main.module.css';

export default class Main extends React.Component {
		state = {
      DeviceID: null,
			Temp: "0", 
			Humidity: "0"
		};

    // useEffect(() => { // have to change so it's every five minutes based on the server's clock
    //   const intervalId = setInterval(() => {
    //     toggleButtonState();
    //   }, 30000);
    
    //   return () => clearInterval(intervalId);
    // }, []);

    toggleButtonState = () => {
        var url = 'http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/tempRequest.php?deviceID=12345';
  
        fetch(url)
          .then(res => res.json())
          .then((data) => {
              { this.setState({ 
                DeviceID: data.DeviceID,
                Temp: data.Temp,
                Humidity: data.Humidity
              }) }
          })
    }

    render() {
      return (
        <React.Fragment>
              <Header /> 
                  <center>
                  <h1>EcoSwitch Main Page</h1>
                  <br/>
                  <p className="text-center">Press below to connect to the EcoSwitch database and retrieve data.</p>
                  <button type="button" className="btn btn-success" onClick={this.toggleButtonState}>Get Information</button>
                  <div className = {styles.tempdisplaybox}>
                  <div className = {styles.tempdisplay}>
                    DeviceID: { this.state.DeviceID } <br/>
										Temperature: { this.state.Temp } <br/>
										Humidity: { this.state.Humidity }
                  </div>
                  </div>
                  </center>
              <Footer />
        </React.Fragment>
      );
    }
}
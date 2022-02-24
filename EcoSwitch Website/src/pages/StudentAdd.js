import React, { Component, setState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Main extends React.Component {
	state = {
        Location: null,
		Email: null,
        RoomNumber: null
	};

    resp = {
        response: null
    };

    handleChangeLocation = (event) => {
        this.setState({ 
            Location: event.target.value
        })
    }

    handleChangeNumber = (event) => {
        this.setState({ 
            RoomNumber: event.target.value
        })
    }

    handleChangeEmail = (event) => {
        this.setState({ 
            Email: event.target.value
        })
    }

    handleSubmit = (event) => {

        var url = 'http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/addUser.php';

        try {
            fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
              },
              body: JSON.stringify(this.state)
            })
          } catch (error) {
            this.resp.response = error;
            this.forceUpdate();
          }
    }

    render() {
      return (
        <React.Fragment>
              <Header /> 
                  <center>
                  <h1>Assign Student to EcoSwitch Device</h1>
                  <br/>
                  <form onSubmit={this.handleSubmit}>
                    <p>Add a student to a dorm and allow them to access that EcoSwitch device by filling out the following information.</p>
                    <div class="form-group">
                        <label class="col-md-3 text-left">Location</label>
                        <input for="location" type="location" class="col-md-3 form-control" id="location" aria-describedby="locationHelp" onChange={this.handleChangeLocation}/>
                        <small id="locationHelp" class="form-text text-muted">Example: 79 Bay State Road</small>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 text-left">Room Number</label>
                        <input for="roomnumber" type="roomnumber" class="col-md-3 form-control" id="roomnumber"  onChange={this.handleChangeNumber}/>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 text-left">Student Email</label>
                        <input for="studentemail" type="email" class="col-md-3 form-control" id="studentemail" onChange={this.handleChangeEmail}/>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                    <br/>
                    <p>response: {this.resp.response}</p>
                  </center>
              <Footer />
        </React.Fragment>
      );
      }
}
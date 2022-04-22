import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';

export default class Register extends React.Component  {
  state = {
    Location: null,
    DeviceID: null,
    RoomNumber: null
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

  handleChangeID = (event) => {
    this.setState({ 
      DeviceID: event.target.value
    })
  }
  

  clickRegister = (event) => {
    event.preventDefault();
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/addDevice';

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          Location: this.state.Location, 
          DeviceID: this.state.DeviceID, 
          RoomNumber: this.state.RoomNumber 
        })
      })
    } catch (error) {
      console.log(error)
    }

    window.location.reload();
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <head>
          <meta charset="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

          <title>Contact - Eterna Bootstrap Template</title>
          <meta content="" name="description"/>
          <meta content="" name="keywords"/>


          <link href="assets/img/favicon.png" rel="icon"/>
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
          <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
          <link href="css/signin.css" rel="stylesheet"/>
          <link href="asset/css/style.css" rel="stylesheet"/>
        </head>
      <body>
        <main>
          <br/>
          <center>
            <div className="login-block" style={{width: 500}}>
              <h1>Register a Device</h1>
              <p>If you are on mobile, open the camera and scan the QR code. Otherwise, you can enter the device ID that is available on the introduction pamphlet.</p>
              <form action="#">
                <hr className="hr-xs"/>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-hashtag ti-unlock"></i></span>
                    <input type="text" className="form-control" placeholder="Device ID"  onChange={this.handleChangeID}/>
                  </div>
                </div>
                <hr className="hr-xs"/>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-building ti-email"></i></span>
                    <input type="text" className="form-control" placeholder="Location"  onChange={this.handleChangeLocation}/>
                  </div>
                </div>
                <hr className="hr-xs"/>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-door-open"></i></span>
                      <input type="text" className="form-control" placeholder="Room Number"  onChange={this.handleChangeNumber}/>
                    </div>
                  </div>
                  <button className="btn btn-success btn-block" type="submit" onClick={ this.clickRegister }>Register Device</button>
                </form>
              </div>
            </center>
            <br/>
          </main>
        </body>
        <Footer />
      </React.Fragment>
    );
  } 
}
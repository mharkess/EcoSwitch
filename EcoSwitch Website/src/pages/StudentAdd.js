import React from 'react';

window.onload = function() {
  document.getElementById("content-1").focus();
};

export default class StudentAdd extends React.Component {
  state = {
    Location: null,
    Email: null,
    RoomNumber: null,
    showHideComp1: true,
    showResults: true
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
  
  handleSubmitAdd = (event) => {
    event.preventDefault();
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/addUser';

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          Location: this.state.Location, 
          Email: this.state.Email, 
          RoomNumber: this.state.RoomNumber 
        })
      })
    } catch (error) {
      this.resp.response = error;
      this.forceUpdate();
    }

    window.location.reload();
  }

  handleSubmitRemove = (event) => {
    event.preventDefault();
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/removeUser';

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          Location: this.state.Location, 
          Email: this.state.Email, 
          RoomNumber: this.state.RoomNumber 
        })
      })
    } catch (error) {
      this.resp.response = error;
      this.forceUpdate();
    }

    window.location.reload();
  }

  onClick = e => {
    this.setState({
      showResults: false
    });
  };
    
  render() {
    return (
      <React.Fragment>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords"
            content="wrappixel, admin dashboard, html css dashboard, web dashboard, 
            bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, 
            Ample lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, 
            Ample admin lite dashboard bootstrap 5 dashboard template" />
          <meta name="description"
            content="Ample Admin Lite is powerful and clean admin dashboard template, inpired from Bootstrap Framework" />
          <meta name="robots" content="noindex,nofollow" />

          <title>Dashboard</title>

          <link rel="stylesheet" href="css/nicepage.css" media="screen"></link>
          <link rel="canonical" href="https://www.wrappixel.com/templates/ample-admin-lite/" />
          <link rel="icon" type="image/png" sizes="16x16" href="plugins/images/favicon.png" />
          <link href="plugins/bower_components/chartist/dist/chartist.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css" />
          <link href="css/main.min.css" rel="stylesheet" />
        </head>

        <body>
          <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <header className="topbar" data-navbarbg="skin5" style={{ background: "rgb(29, 51, 35)" }}>
              <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                  <a className="navbar-brand" href="home">
                    <b className="logo-icon">
                      <img src="images/ecoswitchicon.png" alt="homepage" style={{ height: 50, marginLeft: 80, marginBottom: 7, marginTop: 20 }} />
                    </b>
                  </a>
                  <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                      href="javascript:void(0)">
                    <i className="ti-menu ti-close"></i>
                  </a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5" style={{ background: "rgb(29, 51, 35)", marginBottom: 20 }}>
                  <ul className="navbar-nav ms-auto d-flex align-items-center">
                    <li>
                      <a className="profile-pic" href="profile">
                        <img src="plugins/images/users/varun.jpg" alt="user-img" width="36" className="img-circle" />
                        <span className="text-white font-medium">Steve</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>

            <aside className="left-sidebar" data-sidebarbg="skin6">
              <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                    <li className="sidebar-item pt-2" style={{ marginTop: 15 }}>
                      <a className="sidebar-link waves-effect waves-dark sidebar-link" href="main"
                        aria-expanded="false">
                        <i className="far fa-clock" aria-hidden="true"></i>
                        <span className="hide-menu">Dashboard</span>
                      </a>
                    </li>
                    
                    <li className="sidebar-item">
                      <a className="sidebar-link waves-effect waves-dark sidebar-link" href="DeviceAdjust"
                        aria-expanded="false">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span className="hide-menu">Device Adjustment</span>
                      </a>
                    </li>

                    <li className="sidebar-item">
                      <a className="sidebar-link waves-effect waves-dark sidebar-link" href="studentadd"
                        aria-expanded="false">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <span className="hide-menu" style={{ fontWeight: "bold" }}>Add a Student</span>
                      </a>
                    </li>

                    <li className="sidebar-item">
                      <a className="sidebar-link waves-effect waves-dark sidebar-link" href="signin"
                        aria-expanded="false">
                        <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                        <span className="hide-menu">Sign Out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

          <div className="page-wrapper" style={{ background: "rgb(243, 249, 245)", height: 550 }}>
            <div className="page-breadcrumb bg-white">
              <div className="row align-items-center">
                <div className="col-lg-3 col-lg-4 col-lg-4 col-lg-12">
                  <h4 className="page-title">Assign a Student to or Remove a Student from an EcoSwitch Device</h4>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="d-md-flex mb-3">
                      <div className="wrapper" style={{ marginTop: -40 }}>
                        <div className="tabs" style={{ height: 'auto' }}>
                          <div className="tab">
                            <input type="radio" name="css-tabs" id="tab-1" className="tab-switch" onClick={ this.onClick }/>
                            <label for="tab-1" className="tab-label">Add</label>
                            <div className="tab-content" id="content-1">
                              <center>
                              <p>Add a student to a dorm and allow them to access that EcoSwitch device by filling out the following information.</p>
                              <form onSubmit={ this.handleSubmitAdd }>
                                <div className="form-group">
                                  <label className="col-md-3 text-center">Location</label>
                                  <input type="text" className="col-md-3 form-control" id="location1" aria-describedby="locationHelp" onChange={ this.handleChangeLocation }/>
                                  <small id="locationHelp1" className="form-text text-muted">Please only enter brownstone locations on campus.</small>
                                </div>
                                
                                <div className="form-group">
                                  <label className="col-md-3 text-center">Room Number</label>
                                  <input type="text" className="col-md-3 form-control" id="roomnumber1" onChange={ this.handleChangeNumber }/>
                                </div>
                            
                                <div className="form-group">
                                  <label className="col-md-3 text-center">Student Email</label>
                                  <input type="email" className="col-md-3 form-control" id="studentemail1" onChange={ this.handleChangeEmail }/>
                                </div>

                                <button type="submit" className="btn btn-success text-white">Submit</button>
                              </form>
                              </center>
                            </div>
                          </div>
                          <div className="tab">
                            <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" onClick={ this.onClick }/>
                            <label for="tab-2" className="tab-label">Remove</label>
                            <div className="tab-content">
                              <center>
                              <p>Remove a student from their current dorm by entering the following information.</p>
                              <form onSubmit={ this.handleSubmitRemove }>
                                <div className="form-group">
                                  <label className="col-md-3 text-center">Location</label>
                                  <input type="text" className="col-md-3 form-control" id="location2" aria-describedby="locationHelp" onChange={ this.handleChangeLocation }/>
                                  <small id="locationHelp2" className="form-text text-muted">Please only enter brownstone locations on campus.</small>
                                </div>

                                <div className="form-group">
                                  <label className="col-md-3 text-center">Room Number</label>
                                  <input className="col-md-3 form-control" id="roomnumber2" onChange={ this.handleChangeNumber }/>
                                </div>

                                <div className="form-group">
                                  <label className="col-md-3 text-center">Student Email</label>
                                  <input type="email" className="col-md-3 form-control" id="studentemail2" onChange={ this.handleChangeEmail }/>
                                </div>

                                <button type="submit" className="btn btn-success text-white">Submit</button>
                              </form>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <center>
                      <div className="white-box" style={{ width: 800, marginTop: -80, height: 390 }}>
                        <div nameClass="showName" style={{ display: this.state.showResults ? "block" : "none" }}>
                          <h4 style={{ height: 250, marginTop: 30 }}>Click on one of the tabs above to get started.</h4>
                          <img src="images/vecteezy_a-woman-working-using-laptop-flat-design_6434618.jpg" style={{ height: 250, marginTop: -210 }} alt="https://www.vecteezy.com/free-vector/person-using-computer"/>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script src="plugins/bower_components/jquery/dist/jquery.min.js"></script>
          <script src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
          <script src="js/app-style-switcher.js"></script>
          <script src="plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>
          <script src="js/waves.js"></script>
          <script src="js/sidebarmenu.js"></script>
          <script src="js/custom.js"></script>
          <script src="plugins/bower_components/chartist/dist/chartist.min.js"></script>
          <script src="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>
          <script src="js/pages/dashboards/dashboard1.js"></script>
        </body>
      </React.Fragment>
    );
  }
} 
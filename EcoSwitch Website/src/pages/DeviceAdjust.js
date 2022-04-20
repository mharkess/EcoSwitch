import React from "react";

export default class DeviceAdjust extends React.Component {
  state = {
    Location: null,
    showResults: true
	};

  handleChangeLocation = (event) => {
    this.setState({ 
      Location: event.target.value
    })
  }

  handleSubmitLock = (event) => {
    event.preventDefault();
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/changeState';

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          Location: this.state.Location, 
          State: 0
        })
      })
      } catch (error) {
        console.log(error)
      }

      window.location.reload();
  }

  handleSubmitUnlock = (event) => {
    event.preventDefault();
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/changeState';

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          Location: this.state.Location, 
          State: -1
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
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="keywords"
            content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Ample lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Ample admin lite dashboard bootstrap 5 dashboard template"/>
          <meta name="description"
            content="Ample Admin Lite is powerful and clean admin dashboard template, inpired from Bootstrap Framework"/>
          <meta name="robots" content="noindex,nofollow"/>

          <title>Device Adjust</title>

          <link rel="stylesheet" href="css/nicepage.css" media="screen"></link>
          <link rel="canonical" href="https://www.wrappixel.com/templates/ample-admin-lite/"/>
          <link rel="icon" type="image/png" sizes="16x16" href="plugins/images/favicon.png"/>   
          <link href="plugins/bower_components/chartist/dist/chartist.min.css" rel="stylesheet"/>
          <link rel="stylesheet" href="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"/>
          <link href="css/main.min.css" rel="stylesheet"/>
        </head>

        <body>
          <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
              <header className="topbar" data-navbarbg="skin5" style={{ background: "rgb(29, 51, 35)" }}>
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                  <div className="navbar-header" data-logobg="skin6">
                    <a className="navbar-brand" href="home">
                      <b className="logo-icon">
                        <img src="images/ecoswitchicon.png" alt="homepage" style={{ height: 50, marginLeft: 80, marginBottom: 7, marginTop: 20 }}/>
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
                          <img src="images/vecteezy_profile-icon-design-vector_5544770.jpg" alt="https://www.vecteezy.com/free-vector/profile-icon" width="36" className="img-circle"/>
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
                    <li className="sidebar-item pt-2"  style={{ marginTop: 15 }}>
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
                        <span className="hide-menu" style={{ fontWeight: "bold" }}>Device Adjustment</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link waves-effect waves-dark sidebar-link" href="studentadd"
                        aria-expanded="false">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <span className="hide-menu">Add a Student</span>
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
            <div className="page-wrapper" style={{ background: "rgb(243, 249, 245)", height: '100vh' }}>
              <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-lg-4 col-lg-4 col-lg-12">
                    <h4 className="page-title">Device Adjustment</h4>
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
                            <label for="tab-1" className="tab-label">Lock</label>
                            <div className="tab-content" id="content-1">
                              <center>
                              <p>Choose a location to switch off all the FCUs in. This locks the location, preventing students from changing any devices within the building.</p>
                              <form onSubmit={ this.handleSubmitLock }>
                                <div class="form-group">
                                  <label class="col-md-5 text-center">Location</label>
                                  <input for="location" type="location" class="col-md-3 form-control" id="location" aria-describedby="locationHelp" onChange={ this.handleChangeLocation }/>
                                  <small id="locationHelp" class="form-text text-muted">Format: ## Bay State Rd</small>
                                </div>
                                <button type="submit" class="btn btn-success text-white">Submit</button>
                              </form>
                              </center>
                            </div>
                          </div>
                          <div className="tab">
                            <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" onClick={ this.onClick }/>
                            <label for="tab-2" className="tab-label">Unlock</label>
                            <div className="tab-content">
                              <center>
                              <p>Choose a location to unlock all the devices in. This will return the devices to the state their assigned students have originally set them to be.</p>
                              <form onSubmit={ this.handleSubmitUnlock }>
                                <div class="form-group">
                                  <label class="col-md-5 text-center">Location</label>
                                  <input for="location" type="location" class="col-md-3 form-control" id="location" aria-describedby="locationHelp" onChange={ this.handleChangeLocation }/>
                                  <small id="locationHelp" class="form-text text-muted">Format: ## Bay State Rd</small>
                                </div>
                                <button type="submit" class="btn btn-success text-white">Submit</button>
                              </form>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <center>
                      <div className="white-box" style={{ width: 800, marginTop: -80, height: 260 }}>
                        <div nameClass="showName" style={{ display: this.state.showResults ? "block" : "none" }}>
                          <h4 style={{ height: 250, marginTop: 30 }}>Click on one of the tabs above to get started.</h4>
                          <img src="images/2546_R0lVIERBTiA1NjAtMDM.jpg" style={{ height: 150, marginTop: -325 }} alt="https://www.vecteezy.com/free-vector/building"/>
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
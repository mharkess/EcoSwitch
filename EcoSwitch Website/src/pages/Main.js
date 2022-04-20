import React, { useState } from 'react';
import { auth } from '../components/firebase/firebase';
import { signOut } from "firebase/auth";
import makeData from "../components/makeData";
import Graph from "../components/Graph";

// https://wsvincent.com/javascript-remove-duplicates-array/#:~:text=There%20are%20multiple%20ways%20to,automatically%20remove%20duplicates%20for%20us.&text=Another%20option%20is%20to%20use%20filter().
function removeDups(addresses) {
  let unique = {};
  addresses.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });

  return Object.keys(unique);
}

function findDups(addresses) {
  const toFindDuplicates = addresses => addresses.filter((item, index) => addresses.indexOf(item) !== index);
  const duplicateElements = toFindDuplicates(addresses);
  
  return duplicateElements;
}

function ObjectRowCels(props) {
  var temps = (props.state.Temp[props.deviceNum] - 32) * (5/9);

  return (
    <tr>
      <td>{ props.state.DeviceID[props.deviceNum] } </td>
      <td className="txt-oflo">{ props.state.Address[props.deviceNum] }</td>
      <td>{ props.state.RoomNum[props.deviceNum] }</td>
      <td className="text-success">{ Math.round((temps + Number.EPSILON) * 100) / 100 } C</td>
      <td>
        <span className="text-success">{ props.state.Humidity[props.deviceNum] }%</span>
      </td>
    </tr>
  )
}

function ObjectRowFahr(props) {
  return (
    <tr>
      <td>{ props.state.DeviceID[props.deviceNum] } </td>
      <td className="txt-oflo">{ props.state.Address[props.deviceNum] }</td>
      <td>{ props.state.RoomNum[props.deviceNum] }</td>
      <td className="text-success">{ Math.round((props.state.Temp[props.deviceNum] + Number.EPSILON) * 100) / 100 } F</td>
      <td>
        <span className="text-success">{ props.state.Humidity[props.deviceNum] }%</span>
      </td>
    </tr>
  )
}

export default class Main extends React.Component {
  state = {
    DeviceID: [],
    Temp: [],
    Humidity: [],
    Address: [],
    RoomNum: []
  };

  unit = {
    cels: true
  }

  // useEffect(() => { // have to change so it's every five minutes based on the server's clock
  //   const intervalId = setInterval(() => {
  //     toggleButtonState();
  //   }, 30000);
  
  //   return () => clearInterval(intervalId);
  // }, []);

  componentDidMount() {
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/allRecent?deviceID=12345';
    let temps = [];

    fetch(url)
      .then(res => res.json())
      .then((data) => {
      {
        const getProp = prop => obj => obj[prop];
        const getID = getProp('DeviceID');
        const getTemp = getProp('Temp');
        const getHumidity = getProp('Humidity');
        const getAddress = getProp('Address');
        const getRoomNum = getProp('RoomNum');

        temps = data.map(getTemp);

        temps.forEach((element, i) => {
          temps[i] = (element * (9/5)) + 32;
        });

        this.setState({ 
          DeviceID: data.map(getID),
          Temp: temps,
          Humidity: data.map(getHumidity),
          Address: data.map(getAddress),
          RoomNum: data.map(getRoomNum)
        })
      }
    })
  }

  toggleButtonState = () => {
    var url = 'https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/allRecent?deviceID=12345';

    fetch(url)
      .then(res => res.json())
      .then((data) => {
      {
        const getProp = prop => obj => obj[prop];
        const getID = getProp('DeviceID');
        const getTemp = getProp('Temp');
        const getHumidity = getProp('Humidity');
        const getAddress = getProp('Address');
        const getRoomNum = getProp('RoomNum');

        this.setState({
          DeviceID: data.map(getID),
          Temp: data.map(getTemp),
          Humidity: data.map(getHumidity),
          Address: data.map(getAddress),
          RoomNum: data.map(getRoomNum)
        })
      }
    })
  }

  toggleSliderState = () => {
    if (this.unit.cels)
      this.unit.cels = false;
    else
      this.unit.cels = true;

    this.forceUpdate();
  }

  render() {
    const logout = async (e) => {
      await signOut(auth);
    }

    let rowsCels = [];
    this.state.DeviceID.map((data, i) => {
      rowsCels.push(<ObjectRowCels key={ data.id } deviceNum={ i } state={ this.state }/>);
    });

    let rowsFahr = [];
    this.state.DeviceID.map((data, i) => {
      rowsFahr.push(<ObjectRowFahr key={ data.id } deviceNum={ i } state={ this.state }/>);
    });
  
    // var addresses = this.state.Address;
  //   var alreadySeen = [];
  //   var avgT = [];
  //   var avgH = [];
  //   var countT = 0,
  //       countH = 0;

  //   addresses.forEach(address => {
  //     addresses.forEach(str => {
  //       if (alreadySeen[str]) {
  //         countT++; 
  //         countH++;
  //       }
  //       else
  //         alreadySeen[str] = true;
  //     })

  //     avgT[address] = countT;
  //     avgH[address] = countH;
  //     countT = 0;
  //     countH = 0;
  // })

  // var dataGraph = [];
  // //addresses = removeDups(addresses);
  // var i = 0;

  // addresses.forEach(address => {
  //   dataGraph.push(this.state.Temp[i]);
  //   i++;
  // })

  // const [userData, setUserData] = useState({
  //   labels: addresses,
  //   datasets: [{
  //     label: "Temperature",
  //     data: [{ 
  //       x: this.state.Temp,
  //       y: addresses
  //     }],
  //     backgroundColor: 'rgb(255, 99, 132)'
  //   }]
  // });

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
        <title>Dashboard</title>

        <link rel="stylesheet" href="css/nicepage.css" media="screen"/>
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
                    href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
              </div>
              <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5" style={{ background: "rgb(29, 51, 35)", marginBottom:20 }}>
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
                      <span className="hide-menu" style={{ fontWeight: "bold" }}>Dashboard</span>
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
                  <li className="text-center p-20 upgrade-btn" style={{ width: 150, marginLeft: 43, marginTop: 20 }}>
                    <a nohref onClick={ this.toggleButtonState } className="btn d-grid btn-success text-white" target="_blank" >Get New Data</a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
            <div className="page-wrapper" style={{ background: "rgb(243, 249, 245)" }}>
              <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h4 className="page-title">Dashboard</h4>
                  </div>
                  <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <div className="d-md-flex">
                      <ol className="breadcrumb ms-auto" style={{ marginTop: -2 }}>
                        <li><a href="#" className="fw-normal">Last Update: 2:35 PM EST</a></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="white-box">
                      <div className="d-md-flex mb-3">
                        <h3 className="box-title mb-0">All Locations</h3>
                        <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                          <label className="toggle" style={{ marginLeft: 130 }}>
                            <input type="checkbox" onClick={ this.toggleSliderState }/>
                            <span className="labels" data-on="F" data-off="C"></span>
                          </label>
                        </div>
                      </div>
                      {/* <div className="table-responsive" style={{ display: this.unit.clicked ? "none" : "block" }}>
                        <table className="table no-wrap">
                          <thead>
                            <tr>
                              <th className="border-top-0">ID</th>
                              <th className="border-top-0">Address</th>
                              <th className="border-top-0">Room Number</th>
                              <th className="border-top-0">Temperature</th>
                              <th className="border-top-0">Humidity</th>
                            </tr>
                          </thead>
                          <tbody>
                            { rowsCels }
                          </tbody>
                        </table>
                      </div>
                      <div style={{ display: this.unit.clicked ? "block" : "none" }}> */}
                        <div className="table-responsive" style={{ display: this.unit.cels ? "block" : "none" }}>
                          <table className="table no-wrap">
                            <thead>
                              <tr>
                                <th className="border-top-0">ID</th>
                                <th className="border-top-0">Address</th>
                                <th className="border-top-0">Room Number</th>
                                <th className="border-top-0">Temperature</th>
                                <th className="border-top-0">Humidity</th>
                              </tr>
                            </thead>
                            <tbody >
                              { rowsCels }
                            </tbody>
                          </table>
                        </div>
                        <div className="table-responsive" style={{ display: this.unit.cels ? "none" : "block" }}>
                          <table className="table no-wrap">
                            <thead>
                              <tr>
                                <th className="border-top-0">ID</th>
                                <th className="border-top-0">Address</th>
                                <th className="border-top-0">Room Number</th>
                                <th className="border-top-0">Temperature</th>
                                <th className="border-top-0">Humidity</th>
                              </tr>
                            </thead>
                            <tbody >
                              { rowsFahr }
                            </tbody>
                          </table>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="white-box">
                    <h3 className="box-title">Temperature and Humidity Levels Over Time Interval</h3>
                    <div className="d-md-flex">
                      <ul className="list-inline d-flex ms-auto">
                        <li className="ps-3">
                          <h5><i className="fa fa-circle me-1" style={{ color: "#355f39" }}></i>Temperature</h5>
                        </li>
                        <li className="ps-3">
                          <h5><i className="fa fa-circle me-1" style={{ color: "#9dc9a1" }}></i>Humidity</h5>
                        </li>
                      </ul>
                    </div>
                    <div id="ct-visits" style={{ height: 405 }}>
                      <div className="chartist-tooltip" style={{ top: -17, left: -12 }}>
                        <span className="chartist-tooltip-value">6</span>
                      </div>
                    </div>
                    {/* {dataGraph} */}
                    {/* <Graph chartData={ userData }/> */}
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
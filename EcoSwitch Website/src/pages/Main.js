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
			<head>
				<meta charset="utf-8"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="keywords"
					content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Ample lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Ample admin lite dashboard bootstrap 5 dashboard template"/>
				<meta name="description"
					content="Ample Admin Lite is powerful and clean admin dashboard template, inpired from Bootstrap Framework"/>
				<meta name="robots" content="noindex,nofollow"/>
				<title>Ample Admin Lite Template by WrapPixel</title>
				<link rel="canonical" href="https://www.wrappixel.com/templates/ample-admin-lite/"/>
				
				<link rel="icon" type="image/png" sizes="16x16" href="plugins/images/favicon.png"/>
				
				<link href="plugins/bower_components/chartist/dist/chartist.min.css" rel="stylesheet"/>
				<link rel="stylesheet" href="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"/>
				
				<link href="css/main.min.css" rel="stylesheet"/>
			</head>

			<body>
				<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
			data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
				<header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                    <a className="navbar-brand" href="main">
                        <b className="logo-icon">
                            <img src="images/ecoswitchicon.png" alt="homepage" style={{height: 50, marginLeft: 80}}/>
                        </b>
                    </a>
                    <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                        href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5" style={{marginTop: 50}}>
                   
                    <ul className="navbar-nav ms-auto d-flex align-items-center">

                        <li className=" in">
                            <form role="search" className="app-search d-none d-md-block me-3">
                                <input type="text" placeholder="Search..." className="form-control mt-0"/>
                                <a href="" className="active">
                                    <i className="fa fa-search"></i>
                                </a>
                            </form>
                        </li>
                        <li>
                            <a className="profile-pic" href="#">
                                <img src="plugins/images/users/varun.jpg" alt="user-img" width="36"
                                    className="img-circle"/><span className="text-white font-medium">Steve</span></a>
                        </li>
								</ul>
							</div>
						</nav>
					</header>

			<aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item pt-2">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="main"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="profile.html"
                                aria-expanded="false">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span className="hide-menu">Profile</span>
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
						<li className="text-center p-20 upgrade-btn" style={{width: 150, marginLeft: 43, marginTop: 20}}>
                            <a nohref onClick={ this.toggleButtonState }
                                className="btn d-grid btn-success text-white" target="_blank" >
									Get Data</a>
                        </li>
                    </ul>

					</nav>
				</div>
			</aside>
			<div className="page-wrapper">
				<div className="page-breadcrumb bg-white">
					<div className="row align-items-center">
						<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
							<h4 className="page-title">Dashboard</h4>
						</div>
						<div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
							<div className="d-md-flex">
								<ol className="breadcrumb ms-auto">
									<li><a href="#" className="fw-normal">Dashboard</a></li>
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
                                <h3 className="box-title mb-0">79 Bay State Road</h3>
                                <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                                    <button type="button" className="btn btn-success text-white">Filter</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="border-top-0">ID</th>
                                            <th className="border-top-0">Date</th>
                                            <th className="border-top-0">Time</th>
                                            <th className="border-top-0">Temperature</th>
                                            <th className="border-top-0">Humidity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                        <tr>
                                            <td>{ this.state.DeviceID} </td>
                                            <td className="txt-oflo">2/23/2022</td>
                                            <td>9:29 PM</td>
                                            <td className="text-success">{ this.state.Temp } F</td>
                                            <td><span className="text-success">{ this.state.Humidity }%</span></td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                        <h5><i className="fa fa-circle me-1" style={{color: "#355f39"}}></i>Temperature</h5>
                                    </li>
                                    <li className="ps-3">
                                        <h5><i className="fa fa-circle me-1" style={{color: "#9dc9a1"}}></i>Humidity</h5>
                                    </li>
                                </ul>
                            </div>
                            <div id="ct-visits" style={{height: 405}}>
								<div className="chartist-tooltip" style={{top: -17}, {left: -12}}><span
                                        className="chartist-tooltip-value">6</span>
                                </div>
                            </div>
                        </div>
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
import React, { Component } from 'react';

function Header() {
    return (
        <React.Fragment>
            <head>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

            <title>EcoSwitch Home</title>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>

            <link href="asset/img/favicon.png" rel="icon"/>
            <link href="asset/img/apple-touch-icon.png" rel="apple-touch-icon"/>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

            <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" rel="stylesheet"/>
            <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" rel="stylesheet"/>
            <link href="https://unpkg.com/swiper@8/swiper-bundle.min.css" rel="stylesheet"/>

            <link href="asset/css/style.css" type="text/css" rel="stylesheet"/>
            </head>

            <body>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <a href=""><img src="images/ecoswitchicon.png" alt="" class="img-fluid"/></a>
                </div>

                <nav id="navbar" className="navbar" style={{marginTop: 20}}>
                    <ul>
                    <li><a className="active" href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li className="dropdown"><a href="#"><span>Set Up</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="register">Device Registration</a></li>
                        <li><a href="studentapp">Student Mobile App</a></li>
                        <li><a href="signin">Administrator Website</a></li>
                        <li><a href="componentreplace">Component Replacement</a></li>
                        </ul>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/js/purecounter.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
            <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
            <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.js"></script>

            </body>
        </React.Fragment>
    )
} 

export default Header;
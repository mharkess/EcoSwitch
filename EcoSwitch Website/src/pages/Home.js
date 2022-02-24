import React from "react";

function Home() {
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

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="active" href="home">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li className="dropdown"><a href="#"><span>Set Up</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="register">Device Registration</a></li>
                        <li><a href="studentapp">Student Mobile App</a></li>
                        <li><a href="signin">Administrator Website</a></li>
                        <li><a href="#">Component Replacement</a></li>
                        </ul>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>

            <section id="hero">
            <div className="hero-container">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    <img src="asset/img/19-1780-HOUSING-019-992x413.jpg" alt="First slide"/>
                    <div class="carousel-container">
                    <div class="carousel-content">
                        <h2 class="animate__animated animate__fadeInDown">What is <span>EcoSwitch</span>?</h2>
                        <p class="animate__animated animate__fadeInUp">If you're a student, are you tired of the outdated heating technology that you're stuck with in your residency? To all the housing administrators, how often do people call you to fix their dormitory temperature issues? Let's get past the energy waste and frustration that manual FCUs give us and finally switch to something easier and better for the environment.</p>
                        <a href="#end" class="btn-get-started animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                    </div>
                    </div>


                </div>
                <div id="end"></div>
            </div>
            </div>
        </section>

            <main id="main">
            <section id="featured" className="featured">
            <div className="container">

            <div className="row">
            <div className="col-lg-4">
                <a href="register">
                <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h3><a href="">Register an EcoSwitch Device</a></h3>
                <p>Scan the QR code that was provided in the packaging of the device or enter the device ID</p>
                </div>
                </a>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
                <a href="studentapp">
                <div className="icon-box">
                <i className="bi bi-phone"></i>
                <h3><a href="">Learn About the Student App</a></h3>
                <p>To adjust the temperature setting of your dorm, install the EcoSwitch student app and sign up with your BU email</p>
                </div>
                </a>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
                <a href="signin">
                <div className="icon-box">
                <i className="bi bi-house-door"></i>
                <h3><a href="">Access the Admin Portal</a></h3>
                <p>Monitor all EcoSwitch devices on campus and assign students to dormitories through the administrator website</p>
                </div>
                </a>
            </div>
            </div>

            </div>
            </section>

            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                    <div className="col-lg-6">
                        <img src="asset/img/about.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Made by students for students.</h3>
                        <p className="fst-italic">
                        Our goal was to combine convenience with the sentiment behind Boston University's Zero Waste Plan to reduce the energy waste and housing discomfort that brownstone FCUs leave students with.
                        </p>
                        <ul>
                        <li><i className="bi bi-check-circle"></i> Adjust temperatures ahead of time so your dorm will be comfortable upon arrival.</li>
                        <li><i className="bi bi-check-circle"></i> Enjoy automated responses that integrate outdoor temperatures and humidity levels.</li>
                        <li><i className="bi bi-check-circle"></i> Operate devices on an individual or distributed level for different user types.</li>
                        </ul>
                        <p>
                        EcoSwitch uses smart technology with a clean and intuitive interface that guarantees its users will be satisfied. It provides a scalable, budget-friendly solution that anyone can operate with ease, as well as replaceable components for added customization.
                        </p>
                    </div>
                    </div>

                </div>
                </section>

                <section id="clients" className="clients">
                <div className="container">

                    <div className="section-title">
                    <h2>Technologies We Use</h2>
                    <p>EcoSwitch integrates various technologies to create the electrical and software-based environment that it represents.</p>
                    </div>

                    <div className="clients-slider swiper align-items-center"> 
                        <center>
                        <div className="display">
                        <div className="swiper-slide"><img src="asset/img/clients/client-1.png" alt=""/></div>
                        </div>
                        <div className="display">
                        <div className="swiper-slide"><img src="asset/img/clients/client-2.png" alt=""/></div>
                        </div>
                        <div className="display">
                        <div className="swiper-slide"><img src="asset/img/clients/client-3.png" alt=""/></div>
                        </div>
                        <div className="display">
                        <div className="swiper-slide"><img src="asset/img/clients/client-4.png" alt=""/></div>
                        </div>
                        </center>
                    </div>

                </div>
                </section>
            </main>
            
            <footer id="footer">
                <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>The Team</h4>
                        <ul>
                        <li><i className="bx bx-minus"></i>Michelle Thevenin</li>
                        <li><i className="bx bx-minus"></i>Samarah Uriarte</li>
                        <li><i className="bx bx-minus"></i>Keven DeOliveira</li>
                        <li><i className="bx bx-minus"></i>Michael Harkess</li>
                        <li><i className="bx bx-minus"></i>Jiawei Liao</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>Senior Design Info</h4>
                        <p>
                        Team 31 <br/>
                        EC463 and EC464<br/>
                        Boston University <br/>
                        <strong>Client:</strong> Harsha Ogoti<br/>
                        <strong>Email:</strong> hogoti@bu.edu<br/>
                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 footer-info">
                        <h3>About EcoSwitch</h3>
                        <p>This product was brought to life by Boston University students in the College of Engineering.</p>
                        <div className="social-links mt-3">
                        <a href="https://github.com/samarahu/EcoSwitch" className="twitter"><i className="bx bxl-github"></i></a>
                        </div>
                    </div>

                </div>
                </div>

                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>EcoSwitch</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
                </div>

                </div>
            </footer>

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

export default Home;
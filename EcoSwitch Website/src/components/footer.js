import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        <title>EcoSwitch Home</title>

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
                    <a href="https://github.com/mharkess/EcoSwitch" className="twitter"><i className="bx bxl-github"></i></a>
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

export default Footer;
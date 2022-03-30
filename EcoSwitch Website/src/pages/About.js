import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        <title>About</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        <link href="asset/vendor/animate.css/animate.min.css" rel="stylesheet"/>
        <link href="asset/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="asset/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="asset/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
        <link href="asset/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
        <link href="asset/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
        <link href="asset/css/style.css" rel="stylesheet"/>
        </head>

        <body>
          <Header />
          <main id="main">
            <div style={{marginTop: 50}}></div>
            <section id="about" class="about">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <img src="asset/img/about.jpg" class="img-fluid" alt=""/>
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="counts" class="counts">
              <div class="container">
                <div class="row no-gutters">
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-emoji-smile"></i>
                      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                      <p style={{marginTop: 15}}><strong>Happy Clients</strong> consequuntur quae qui deca rode</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-journal-richtext"></i>
                      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                      <p style={{marginTop: 15}}><strong>Projects</strong> adipisci atque cum quia aut numquam delectus</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-headset"></i>
                      <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                      <p style={{marginTop: 15}}><strong>Hours Of Support</strong> aut commodi quaerat. Aliquam ratione</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-people"></i>
                      <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                      <p style={{marginTop: 15}}><strong>Hard Workers</strong> rerum asperiores dolor molestiae doloribu</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="testimonials" class="testimonials">
              <div class="container">
                <div class="section-title">
                  <h2>The Team</h2>
                  <p>This project was put together by five Boston University students as their senior design project for the school year of 2021-2022.</p>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="testimonial-item">
                      <img src="asset/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="testimonial-item mt-4 mt-lg-0">
                      <img src="asset/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="testimonial-item mt-4">
                      <img src="asset/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="testimonial-item mt-4">
                      <img src="asset/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <center>
                    <div class="testimonial-item mt-4" style={{width: 475}}>
                      <img src="asset/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </center>
                </div>
              </div>
            </section>
          </main>

          <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

          <script src="asset/vendor/purecounter/purecounter.js"></script>
          <script src="asset/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="asset/vendor/glightbox/js/glightbox.min.js"></script>
          <script src="asset/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="asseT/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="asset/vendor/waypoints/noframework.waypoints.js"></script>
          <script src="asset/vendor/php-email-form/validate.js"></script>

          <script src="asset/js/main.js"></script>
          <Footer />
        </body>
      </React.Fragment>
    );
  }
} 
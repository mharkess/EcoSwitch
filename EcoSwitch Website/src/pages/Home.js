import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './carousel.module.css';

function Home() {
    return (
        <React.Fragment>
            <main role="main">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className={styles.active}></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className={styles.carouselinner}>
                <div className={'{styles.carouselitem} ${styles.active}'}>
                    <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"/>
                    <div className="container">
                    <div className={'${styles.carouselcaption} ${styles.text-left}'}>
                        <h1>Example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                    </div>
                    </div>
                </div>
                <div className={styles.carouselitem}>
                    <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"/>
                    <div className="container">
                    <div className={styles.carouselcaption}>
                        <h1>Another example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                    </div>
                    </div>
                </div>
                <div className={styles.carouselitem}>
                    <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide"/>
                    <div className="container">
                    <div className={'${styles.carouselcaption} ${styles.text-right}'}>
                        <h1>One more for good measure.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            <div className={'${container} ${styles.marketing}'}>

                <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Add Automation</h2>
                    <p>EcoSwitch will work to ensure the temperatures in student dorms stay at a comfortable level without any extra hassle!</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Control Remotely</h2>
                    <p>Through either an app for students or a website for administrators, EcoSwitch provides a remote solution that is accessible from anywhere on campus.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Save Energy</h2>
                    <p>With the energy-efficient design behind EcoSwitch, Boston University housing will only get closer to its sustainable goals.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                </div>

                <hr className={styles.featurettedivider}/>

                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className={styles.featuretteheading}>First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>

                <hr className={styles.featurettedivider}/>

                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className={styles.featuretteheading}>Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>

                <hr className={styles.featurettedivider}/>

                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className={styles.featuretteheading}>And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>
                <hr className={styles.featurettedivider}/>
            </div>
            </main>
        </React.Fragment>
    )
}

export default Home;
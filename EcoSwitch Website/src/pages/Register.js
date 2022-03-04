import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';

export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <div>If you are on mobile, open the camera and scan the QR code. Otherwise, you can enter the device ID that is available on the introduction pamphlet.</div>
            <Footer />
            </React.Fragment>
        );
    }
}
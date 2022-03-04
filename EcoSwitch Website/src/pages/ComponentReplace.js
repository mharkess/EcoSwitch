import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';

export default class ComponentReplace extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <div>Follow the steps below for an attachment replacement.</div>
            <Footer />
            </React.Fragment>
        );
    }
}
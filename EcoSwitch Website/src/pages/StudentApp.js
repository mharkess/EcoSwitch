import React from "react";
import Header from '../components/header';

export default class StudentApp extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <div>Install the app from the Google Play Store.</div>
            </React.Fragment>
        );
    }
}
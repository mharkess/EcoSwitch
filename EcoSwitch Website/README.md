# <div id="top">EcoSwitch Administrator Website</div>

## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#software-module-overview">Software Module Overview</a>
      <ul>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#main-functionalities">Main Functionalities</a></li>
      </ul>
    </li>
    <li>
      <a href="#dependencies-between-modules">Dependencies Between Modules</a>
    </li>
    <li>
      <a href="#development-and-build-information">Development and Build Information</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-installation">Prerequisites Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
  <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>

## About The Project
<p align="justify">
  The EcoSwitch website was designed to provide housing administrators and faculty with a way to register and install new devices, as well as monitor and control currently existing ones. The original problem statement required the EcoSwitch system to be tamper-proof, so the administration website was conceptualized and developed to meet that feature.
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Software Module Overview
<p align="justify">There are several pages that currently make up the EcoSwitch website. While some of them are simple in their functions and exist to provide information about the website and overall system, others have more significant purposes and provide access to the main features that are described in detail below.</p>

### Pages
<p align="justify">All of these pages take the form of JS functions or components that are imported and linked together in the App.js file location in the src folder of this directory.</p>

#### Home, ComponentReplace, StudentApp, and ErrorPage
<p align="justify"></p>

#### Register
<p align="justify">This page is directly accessible from the website's home page and does not require users to be logged in for usage. It is important to the system's initial installation, as it allows individuals to register new EcoSwitch devices. It consists of a simple form that requests for the user to input the device ID, installation building location, installation room number. Additionally, we have designed a QR code that links to this page and would be placed within the device's packaging so users can easily scan it to set it up.</p>

<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/images/register.png" height="400"/>
</div>
</br>
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/images/qr-code.png" height="400"/>
</div>

#### SignUp and SignIn
<p align="justify"></p>

#### Main, DeviceAdjust, StudentAdd, and Profile
<p align="justify"></p>

### Main Functionalities
<p align="justify">A high-level description of all the website's main features are provided in this section, respective to the list of pages provided in the "Pages" section.</p>

#### Clean and Easy to Navigate Interface

#### Device Registration
<p align="justify">As mentioned in the "Register" section, the EcoSwitch website offers the ability for users to register new EcoSwitch devices. This effectively adds them to the database and allows them to start communicating with the rest of the system. It is meant to be accessible and easy to use so the facility workers who would be setting up the devices in the dormitories would be able to do so without any difficulties. At the moment, the submission form does not have any error checking that guarantees the location and EcoSwitch ID is valid; however, this would be necessary to establish before product deployment.</p>

#### Account Creation
<p align="justify"></p>

#### Data Querying and Posting
<p align="justify"></p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Dependencies Between Modules



<p align="right">(<a href="#top">back to top</a>)</p>

## Development and Build Information
All installed dependencies for the project can be found within the [package.json](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/package.json) and [package-lock.json](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/package-lock.json) files located in this directory.

This project was developed and built using the following programs and versions:

- [NodeJS v14.17.6](https://nodejs.org/en/download/)
- NPM v8.6.0

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites Installation

Install the software mentioned above in the [Development and Build Information](#development-and-build-information) section. This varies per system and operating system. Please refer to the respective websites for further installation information.

Once the repository is cloned, navigate to this directory (.../EcoSwitch/EcoSwitch Website) and run the following code to automatically build the project and install its dependencies:

```sh
npm install
```

### Usage

For development mode, npm can be used as well.
1. In the project directory, start the session with the following command:

```sh
npm start
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will start the development server and the project can be accessed through localhost port 3000 ([http://localhost:3000](http://localhost:3000)).

**OR**

1. Access the project's pre-production build, hosted using Amplify. 
    - [Deployed Version](https://main.d3enog0k6n6e1t.amplifyapp.com/)
    - Please note that popups may be blocked, so the best way to create an account and subsequently log in is by entering your email and choosing a password through the sign-up page.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

If there are any further questions about the application project, please contact the lead developer via email.
- samcu@bu.edu
- samarah.cu@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

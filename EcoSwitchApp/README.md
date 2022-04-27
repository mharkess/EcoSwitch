# <div id="top">EcoSwitch Mobile Application</div>

## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#software-module-overview">Software Module Overview</a>
      <ul>
        <li><a href="#appjs">App.js</a></li>
        <li><a href="#stylesjs">styles.js</a></li>
      </ul>
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
  One of the original desired deliverables given by the client is a cross-platform mobile application that students can use to monitor and manage the   temperature in their rooms. Students can log in using their given BU email and view their associated information.
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Software Module Overview

<p align="justify"> Currently, the application has one main module that contains all functionality. While this is bad practice, it was Keven's first time using React Native for a large scale project and due to time constraints he could not reorganize the code. </p>

### App.js
The driving module for the mobile application. Developed using the React Native Framework and Javascript. This module includes three screens for the user to navigate through, each detailed below. Images of each screen are linked as well.

#### [Login Screen](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitchApp/images/login-screen.PNG)
<p align="justify"> This is where users will sign in with their given BU email account, using Google Authentication to secure the interaction. The app prevents any emails outside of the proper domain (@bu.edu) from signing into the application. This feature was implemented as an extra authentication step since only BU students should be using the application. </p>

#### [Main Screen](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitchApp/images/main-screen.PNG)
<p align="justify"> This screen displays the current temperature and humidity reported by the user's assigned device. The information is fetched from our backend database based off of the user login. The values presented to the user refreshes every 10 seconds in the development build, but will be changed to every 5 minutes for production. Users can also set a desired temperature for their room, which the device will adapt to accordingly. </p>

#### [Credits Screen](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitchApp/images/credits-screen.PNG)
<p align="justify"> A simple screen displaying the names of the project contributors. Accessed through tapping the logo in the upper-right corner. </p>

### styles.js
<p align="justify"> A separate JavaScript file that contains all the formatting for different elements in each screen render. </p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Development and Build Information
All installed dependencies for the project can be found within the [package.json](https://github.com/mharkess/EcoSwitch/blob/main/UserApp/EcoSwitchApp/package.json) and [package-lock.json](https://github.com/mharkess/EcoSwitch/blob/main/UserApp/EcoSwitchApp/package-lock.json) files found within this directory.

Developed and built using the following programs and versions:

- [NodeJS v14.17.6](https://nodejs.org/en/download/)
- NPM v6.14.15
- [Expo v4.12.11](https://docs.expo.dev/get-started/installation/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites Installation

Install the software mentioned above in the [Development and Build Information](#development-and-build-information) section. This varies per system and operating system. Please refer to the respective websites for further installation information.

Once repository is cloned, navigate to this directory (.../EcoSwitch/EcoSwitchApp) and run the following code to automatically install dependencies from package.json:

```sh
npm install
```

Alternatively, the following also works:

```sh
expo install
```

### Usage

For development mode, use Expo and ExpoGo.
1. In the project directory, start the session with the following command:

```sh
expo start
```

2. With mobile device with ExpoGo installed, scan the provided QR code and open the application.

**OR**

1. Access the project pre-production build, hosted using Amplify. 
    - [LINK](https://main.d2yjkgcqrgxtij.amplifyapp.com/)
    - Please note that this build does not work properly at this time.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

If there are any further questions about the application project, please contact the lead developer via email.
- kevend@bu.edu
- kedeoliveira7@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

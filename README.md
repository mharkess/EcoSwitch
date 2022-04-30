# <div id="top">EcoSwitch</div>
EcoSwitch is an automated, energy-saving system for brownstone fan coil units (FCUs). It provides a BU-specific solution for maintaining comfortable dorm temperatures. Our product is simple, cost-effective, and meets the needs of BU's students and employees alike.

## Table of Contents
  <ol>
    <li>
      <a href="#engineering-addendum">Engineering Addendum</a>
      <ul>
        <li><a href="#hardware">Hardware</a></li>
        <li><a href="#software">Software</a></li>
      </ul>
    </li>
    <li>
      <a href="#software-reports">Software Reports</a>
    </li>
    <li>
      <a href="#hardware-report">Hardware Report</a>
    </li>
    <li>
      <a href="#previous-reports">Previous Reports</a>
    </li>
    <li>
      <a href="#contact-us">Contact Us</a>
    </li>
  </ol>

## Engineering Addendum

### Hardware

#### Circuit
<p align="justify">All relevant details about the connection of the circuit and its components is described in the <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Circuit/Circuit.md">circuit_README </a>. It lists all the electronics specifications and steps to construct the circuit from scratch. Also, the reasons for selecting the electronics are listed there.</p>

<p align="justify">The next steps for the circuit are:</p>
- Add a LCD screen to display the temperature reading of the sensor

<p align="justify">
  
#### Attachment
<p align="justify">All relevant details about the attachment is mentioned in the <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_attachmen/README_Hardware_Attachment.md">attachment README</a>. All the desinging concepts 3D models are listed there.</p>

<p align="justify">It is important to note that inserting a thin rubber strip in between the dial and the attachment allows the attachment to fit tighter on the switch.</p>

#### Installation and casing
<p align="justify">
  All relevant description for the device casing and installation is described in the <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/README_Hardware_Installation.md">installation README</a>. It contains 3D models for the casing and instructions for installation.
</p>

### Software

#### Database and Server
<p align="justify">
  All relevant details about the EC2 server and MySQL database is described in the <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/README_Software_Backend.md">backend README</a>. Everything that is needed to create instances in AWS and populate those instances with the necessary files is documented there. 
</p>

The next steps for the server and the database are:
  - Add another column could be added to the database to keep track of previous temperatures and humidities to be displayed for administrators. 
  - Add error checking for API requests (for wrong data types)
  - Make SQL queries from the API to the database more secure (ex. checking the query before submitting to the database)

 <p align="justify">
  As a note, some of the PHP API calls have trouble working, even when they are set up correctly. This happens namely to tha API calls that take in arguments from the packet body and are adding/subracting rows in the database. The only work around that seemed to resolve it was to redirect the call through a API service (like AWS API Gateway), so that the request first goes to the API service, then the server (the response goes from the server to the API service).
 </p>
 
  #### EcoSwitch Device
<p align="justify">
  All relevant details about the EcoSwitch Device are described in the 
  <a href="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/README_Software_ESP32.md">ESP32 README</a>. 
  Everything needed to upload the project and run it is documented in there. 
</p>

The next steps for the EcoSwitch Device are:
  - Polish UI interface for users
  - Add extra items to Administration page (Like locking device locally)

 <p align="justify">
  As a note, if the device is unable to connect to the network when it first boots, the device will reset itself on every attempt. If internet connection is lost during normal operation, then the device will continue operating normally with the exception of uploading sensor data to the database and retrieving the user's target temperature from the databae.
 </p>

#### Mobile Application
<p align="justify">
  To begin development, please follow the instructions outlined in the 
  <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitchApp/README_Software_MobileApp.md#development-and-build-information">mobile application README</a>. 
  Everything needed to initially build the project and run it is documented there. Note that some of the tools used for development were not the latest version (i.e. Expo) and updating to the latest version may cause problems with running the application.
</p>

#### Website
<p align="justify">
  All relevant details on the website's current status can be found in its corresponding <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/README_Software_Website.md">website README</a>.
</p>

Next steps for the website:
- Authentication checking to ensure the user is logged in before being able to access the dashboard and its other linked pages
- An interactive graph that plots the average temperatures and humidity levels for each location
- Error checking for the various inputs that are allowed
  - location-related inputs: ensure the building is a valid BU brownstone location
  - room number-related inputs: ensure the room exists in the specified location
  - student email-related inputs: ensure the student email exists and is from BU
  - device registration: ensure the device does not already exist in the database
  - location locking: ensure the location is not already locked
  - location unlocking: ensure the location is not already unlocked
  - student assignment: ensure the student has not already been assigned to the specified device
  - student removal: ensure the student has not already been removed from the specified device or has never been assigned to it
- Confirmation messages for form submissions

<p align="justify">It is worth keeping in mind that the React JS version the website has been built with is newer and therefore, older articles online that provide React JS tutorials may no longer be applicable. For example, the useHistory function has been replaced with useNavigate. Additionally, for forms, it is important to prevent the page from refreshing before the API call has been completed. Using the preventDefault method achieves this. Finally, to view console outputs, use the Developer Tools Console rather than the terminal that is being used to run the server.</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Software Reports

- [Database and Server](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/README_Software_Backend.md)
- [EcoSwitch Device](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/README_Software_ESP32.md)
- [Mobile Application](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitchApp/README_Software_MobileApp.md)
- [Website](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch%20Website/README_Software_Website.md)

<p align="right">(<a href="#top">back to top</a>)</p>

## Hardware Report

- [Circuit](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Circuit/Circuit_Diagram.md)
- [Attachment](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_attachmen/README_Hardware_Attachment.md)
- [Installation and Casing](https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/README_Hardware_Installation.md)

<p align="right">(<a href="#top">back to top</a>)</p>

## Previous Reports

- [First Semester PDRR](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/First%20Semester%20PDRR%20Report.pdf)
- [User Manual](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/User%20Manual.pdf)
- First Prototype Testing:
  - [Test Plan](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/First%20Prototype%20Test%20Plan.pdf)
  - [Test Report](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/First%20Prototype%20Test%20Report.pdf)
- Second Prototype Testing:
  - [Test Plan](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/Second%20Prototype%20Test%20Plan.pdf)
  - [Test Report](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/Second%20Prototype%20Test%20Report.pdf)
- Final Prototype Testing:
  - [Test Plan](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/Final%20Prototype%20Test%20Plan.pdf)
  - [Test Report](https://github.com/mharkess/EcoSwitch/blob/main/Project%20Reports/Testing/Final%20Prototype%20Test%20Report.pdf)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact Us

If there are any further questions about this project, please contact the lead developers via email.
- mharkess@bu.edu
- kevend@bu.edu
- liaophie@bu.edu
- samcu@bu.edu
- thevenin@bu.edu 

<p align="right">(<a href="#top">back to top</a>)</p>

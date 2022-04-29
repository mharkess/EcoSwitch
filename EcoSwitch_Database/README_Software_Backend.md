# EcoSwitch Database and Server
## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#software-module-overview">Software Module Overview</a>
      <ul>
        <li><a href="#ecoswitch-api">EcoSwitch API</a></li>
      </ul>
    </li>
    <li>
      <a href="#development-and-build-information">Development and Build Information</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#mariadb-setup-on-amazon-rds">MariaDB Setup on Amazon RDS</a></li>
        <li><a href="#apache-setup-on-amazon-ec2">Apache Setup on Amazon EC2</a></li>
        <li><a href="#amplify-hosting-setup">Amplify Hosting Setup</a></li>
      </ul>
    </li>
  <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>

## About the Project
The EcoSwitch database and server was designed to store sensor data from the FCU and handle requests from users using the administrator website or the mobile application. The original problem statement required the EcoSwitch system to record temperature and humidity data, so the databases and server was developed to meet that feature.

## Software Module Overview
There are a handful of PHP files that act as the API for the EcoSwitch project. However, those files do not rely on each other in order to function. Each can be ran seperately and serve different purposes. Some update sensor data in the database and others add new records of devices to the database.

### Ecoswitch API
Below is a list of implemented API for EcoSwitch along with examples of valid calls, organized by the type of request being made. There is also a provided description of what each call is supposed to function as. Below, all of the example JSON's are assuming that you are using a JSON stringify function and a HTTP request library like fetch.  

All Requests will be received by the EC2 instance via its URL.  

So, to use the API, it would be in the format of: `URL/API`. From the API below, an example would be: `https://my-instance-public-dns-name/API/addUser.php?deviceId=<id>`

*Note: If HTTPS is giving issues when implementing the API endpoints, an alternative is using HTTP

#### GET Requests
##### /device_dataUpdate.php
  - Description: Updates temp and humidity of a particular device in the database (device is determined by their ID number)
  - Query Format:
    - `/device_dataUpdate.php?temperature=<temp>&humidity=<humidity>&deviceID=<id>` 
  - Example valid Query:
    - `https://my-instance-public-dns-name/API/device_dataUpdate.php?temperature=22.4&humidity=6.5&deviceID=12345`
##### /allUsers.php
  - Description: Retrieves table of all users in the database (table contains user's email, address and room number).
  - Query Format:
    - `/allUsers.php?deviceID=<id>`
  - Example of valid Query:
    - `https://my-instance-public-dns-name/API/allUsers.php?deviceID=12345`     
##### /allRecent.php
  - Description: Retrieves table of all devices in the database (table contains device ID, most recent temperature of their room and most recent humidity of their room).
  - Query Format:
    - `/allRecent.php?deviceID=<id>`
  - Example valid Query:
    - `https://my-instance-public-dns-name/API/allRecent?deviceID=12345`
##### /tempRequest.php
  - Description: Retrieves most recent temperature and humidity of a particular device from the database
  - Query Format:
    - `/tempRequest.php?DeviceID=<id>`
  - Example valid Query:
    - `https://my-instance-public-dns-name/API/tempRequest?DeviceID=12345` 
##### /getUser.php 
  - Description: Retrieves all information related to queried user (Email, Address, Room Number and DeviceID)
  - Query Format:
    - `/getUser.php?email=<email>`
  - Example valid Query:
    - `https://my-instance-public-dns-name/API/getUser?email=bob@bu.edu`
  - Return Value Format:
    - {"Student": "TEST@bu.edu", "Address": "101 Bay State Rd", "RoomNumber": "101", "DeviceID": "12345"}    


#### POST Requests
##### /addUser.php
  - Description: Adds users to a table relating users to the room and address that they are currently residing.
  - URL Query:
    -  `https://my-instance-public-dns-name/API/addUser`
  - Example valid JSON to send in body:
    - {"Email": "example@gmail.com", "Location": "123 Washington St", "RoomNumber": "1234"} 
##### /desiredTemp.php
  - Description: Changes the user's desired temperature of the room in the database
  - URL Query:
    -  `https://my-instance-public-dns-name/API/desiredTemp`
  - Example valid JSON to send in body:
    - {"DeviceID": "12345", "desiredTemp": "10"}
##### /changeState.php
  - Description: Locks all devices in a location to a setting of the admin's choosing
    - Note: States are defined as: -1,0,1,2,3. Any value greater than -1 will lock devices to a particular setting. State -1 allows state to be changed by student input. 
  - URL Query:
    -  `https://my-instance-public-dns-name/API/changeState.php`
  - Example valid JSON to send in body:
    - {"Location": "25 Bay State Rd", "State": "0"}
##### /removeUser.php
  - Description: Removes User from database, user will no longer to be able to control a device
  - URL Query:
    -  `https://my-instance-public-dns-name/API/removeUser.php`
  - Example valid JSON to send in body:
    - {"Location": "TEST", "Email": "TEST@bu.edu", "RoomNumber": "101"}
##### /addDevice.php
  - Description: Adds devices to a table relating devices to the room and address of the device's location.
  - URL Query:
    -  `https://my-instance-public-dns-name/API/addDevice.php`
  - Example valid JSON to send in body:
    - {"DeviceID": "46826", "Location": "972 Washington St", "RoomNumber": "10348"}  
## Dependencies Between Modules
This section provides a flowchart showing the generic movement of data from the client (via the mobile appplication or administrator website) to the database. Note that any API that is listed above can go into the second box as shown below.
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/images/Backend%20Flow%20Chart.png" width="600"/>

## Development and Build Information
This project was built with the following programs, versions and hardware:
### RDS Build Information:
#### Software
* MariaDB v10.6.7
#### Hardware (Can be upgraded for better performance)
* 1 vCPU
* 1GiB RAM
* 20GiB SSD Storage
### EC2 Build Information:
#### Software
* Amazon Linux 2 Kernel v5.10 AMI 2.0.20220419.0 (with x86_64 Architecture)
* PHP v7.2
* Apache v2.4
#### Hardware (Can be upgraded for better performance)
* 1 vCPU
* 1GiB RAM
* 8 GiB SSD Storage

## Getting Started
### MariaDB Setup on Amazon RDS
1. In order to get started, you will need to have an Amazon AWS account. You can sign up for one here: [Amazon AWS](https://aws.amazon.com/free/?trk=ps_a134p000006pklfAAA&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=Bing&sc_category=core&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=amazon%20aws&sc_content=Amazon%20AWS_e&sc_matchtype=e&sc_segment=&sc_medium=ACQ-P|PS-BI|Brand|Desktop|SU|AWS|Core|US|EN|Text&s_kwcid=AL!4422!10!71674567499740!71675011065633&s_kwcid=AL!4422!10!71674567499740!71675011065633&ef_id=d4773c0cc8251c3e64215e0735ed7a46:G:s&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).

1. Once you have signed up for an account you will be greeted by the AWS dashboard. From here, you can follow the [RDS tutorial](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MariaDB.html) to setup a MariaDB RDS instance in the AWS Documentation.

2. Once the RDS instance of the MySQL database has been created, there are two options to populate the database with schemas, tables and data. You can either SSH into the RDS instance from the command terminal or use a tool called MySQL Workbench. The continuation of the setup in this document will be using the MySQL Workbench as it provides a relatively good UI for displaying the data in the database, makes it easier to create/test SQL scripts and is a one-click connection to the cloud instance after first time setup.

The latest version of MySQL Workbench can be downloaded [here](https://dev.mysql.com/downloads/workbench/).

3. Once MySQL Workbench is opened, you can follow the [MySQL Workbench tutorial](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html) provided by the official MySQL documentation to connect the Workbench to a remote SQL database (which in this case is the RDS instance).

4. Next, download the repo and navigate to `EcoSwitch/EcoSwitch_Database/RDS`. You will need the contents of this folder to populate the RDS instance with the appropriate schemas, tables and procedures.

5. Connect to the RDS instance via the Workbench and in the to menu, go to Edit -> Preferences -> Administration.

6. On this page, you will want to set the myssqldump.exe location to the mysqldump.exe file included in the repo (which is in `EcoSwitch/EcoSwitch_Database/RDS`).
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/images/selectdumpexe.png" width="600"/>
</div>

7. Once that is done, navigate to Server -> Data Import from the top menu. Select "Import from a Self-Contained File" and select the "EcoSwitchDB.sql" file in `EcoSwitch/EcoSwitch_Database/RDS`.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/images/ImportSqlSave.png" width="600"/>
</div>


8. Once the file is selected, click on the "Import Progress" tab and click the "Import" button. This should upload the schemas, test data, tables and procedures created for this project to the RDS Instance.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/images/startimport.png" width="600"/>
</div>

9. You can check the Workbench on the main page (the page that shows up after connecting to a DB) in the left side bar if all of the data is imported correctly. **NOTE:** To check the data on the left sidebar, you may need to refresh the sidebar by clicking the refresh icon at the top of the bar.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Database/images/SchemaRefresh.png" width="300"/>
</div>

### Apache Setup on Amazon EC2
To hold the API calls that this project uses, we store it on a EC2 instance running Apache to handle requests from the client.
1. Follow the setup to create an EC2 instance at this link: [EC2 Setup](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html). When creating the instance, choose Amazon Linux 2 as the OS for the instance as this is the OS that this document refers to during the setup process.
2. After setting up the EC2 instance, to access the files in the instance, you will need to SSH into it. You will need at the Public IPv4 DNS to SSH, which can be found in the instances tab as well as the key-pair file created during setup (downloaded onto your machine). In order to do SSH in your terminal, you will need to run this command (you will need to replace the placeholders):
```sh
ssh -i /path/my-key-pair.pem my-instance-user-name@my-instance-public-dns-name
```

3. To configure Apache web server, PHP and MariaDB (in case you decide to not use RDS) you can follow the setup guide in this AWS documentation: [Apache Setup](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html).

4. To add the PHP files to the EC2 instance you can download the repository and copy the files to EC2. After the repository is downloaded you can run this command:
```sh
scp -i /path/my-key-pair.pem /path/my-php-folder ec2-user@my-instance-public-dns-name:/var/www/html
```
**NOTE:** Make sure you change the RDS URL to the URL of the instance that you have setup in the previous section for all of the PHP files before proceeding!

5. If successful, you can visit the PHP files in browser to see if they work (you can test with some of the GET API requests) with the following format: `https://my-instance-public-dns-name/API/api-call.php`


#### Potential Issues
If you are having trouble connecting to the EC2 instance, you can follow this [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html) about SSH connection to EC2.
 
### Amplify Hosting Setup
To host the admin website for this project, we decided to host it on Amplify as it could be deployed directly from the Github. To host the admin website on Amplify, navigate to the Amplify console and click on "Host Web App" in the dropdown bar in the top right of the page.
1. Click on the Github Icon on the page that loads and then you will be prompted to link your Github account to Amplify. NOTE: to deploy to Amplify in this manner, you MUST have ownership of the repo. 
2. Once your Github account is linked, you will be able to choose the repo to deploy to Amplify. Select the desired repo in the dropdown box. If you copied our repo, then you will only want to deploy a single folder in the repo. To do this, there is a selection at the bottom screen asking if you want to deploy a monorepo. Click the checkbox and then type in the path of the folder from the main file of the repo, which would be "EcoSwitch Website" (without quotations) if you are setting up the website.
3. Click next to bring you to a page showing the script that Amplify will use to compile and run the selected Web App. However, the default script must be changed to add extra libraries not included in `npm install`. Click on edit and replace the default script with the following:
```sh
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm install
            - npm install firebase
            - npm install @firebase/analytics
            - npm install react-firebase-hooks
            - npm install react-chartjs-2 chart.js
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: build
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: EcoSwitch Website
``` 
4. After the script has been modified with the above, save it and continue clicking the next button until a "Save and Deploy" button appears. Make sure that the info that pops up on that page is correct. Once you have checked the information, click the "Save and Deploy" button and then wait between 5-8 minutes for Amplify to deploy the website.

5. Once the Web App has been deployed, Amplify will display a link to view the web app in the browser. From here you can test the website to see if it is being displayed properly and if the API calls are functioning.

#### Potential Errors
Some most of the errors that were encountered when deploying the website appeared during the build phase of the deployment. If you do get an error, you can click on the stage that failed during deployment to view the console logs. The most common errors were missing libraries (which can be added to the script above) or common coding mistakes as undeclared variables.  

## Contact
If there are any further questions about the application project, please contact the lead developer via email.
* mharkess@bu.edu

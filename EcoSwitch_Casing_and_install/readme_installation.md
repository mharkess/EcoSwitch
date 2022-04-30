# EcoSwitch Installation and Casing
## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#hardware-module-overview">Hardware Module Overview</a>
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
The EcoSwitch device installation involes assemble and mount on the Fan Control Unit(FCU). The original problem statement required the EcoSwitch device to be safely mounted on the FCU dial and temper proof. 

## Software Module Overview
The device comes with a battery pack connected to a retangular box which is the circuit and driver for the device. Also, there should be another longer retangular box with four M4 screws and two M3 screws. The installation steps below shows how to amssemble the whole device and mount it on the top of FCU dial. 
### Designing casing for EcoSwitch
The first part is the case for the stepper motor. The purpose of this case is to stabilize the stepper motor when it turns. Therefore, the inner square  dimension for the case should be really close to the overall dimention of the stepper motor with around 10% tolerencce for the error in 3D printing. The 3D model for this case is here:. The following diagram is a perpective view for this case.

#### EcoSwitch Installation Steps
Each EcoSwitch device will come prebuilt with a motor, an attachment, a circuit board within the rectangular outer shell, and a battery pack. The device will be mounted on the FCU dial and securely attached to the knob. Then, batteries are needed in the battery pack to power the device and assemble it as follow:
1.Put two T-shape bars beside the rectangle box. 
2.Use four M4x20 mm screws and drill them inside the two holes of the T-shape bars. Also, fix the M4 screw locks at the end to stabilize the screws.
3.Use two M3x20 mm screws to drill on the top hole of the two T-shape bars.
4.Fix the M3 screw locks at the end to stabilize the screws.



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

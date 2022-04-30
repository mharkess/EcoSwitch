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

## Hardware Module Overview
The device comes with a battery pack connected to a retangular box which is the circuit and driver for the device. Also, there should be another longer retangular box with four M4 screws and two M3 screws. The installation steps below shows how to amssemble the whole device and mount it on the top of FCU dial. 
### Designing casing for EcoSwitch
The first part is the case for the stepper motor. The purpose of this case is to stabilize the stepper motor when it turns. Therefore, the inner square  dimension for the case should be really close to the overall dimention of the stepper motor with around 10% tolerencce for the error in 3D printing. The 3D model for this case is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part1.SLDPRT">casing_for_motor</a>. The following diagram is a perpective view for this case.
<img width="668" alt="Screen Shot 2022-04-29 at 8 26 44 PM" src="https://user-images.githubusercontent.com/90203309/166083251-9bbdfed4-f2da-4a0c-9ff0-239c50839130.png">

#### EcoSwitch Installation Steps
Each EcoSwitch device will come prebuilt with a motor, an attachment, a circuit board within the rectangular outer shell, and a battery pack. The device will be mounted on the FCU dial and securely attached to the knob. Then, batteries are needed in the battery pack to power the device and assemble it as follow:
#### 1.Put two T-shape bars beside the rectangle box. 
#### 2.Use four M4x20 mm screws and drill them inside the two holes of the T-shape bars. Also, fix the M4 screw locks at the end to stabilize the screws.
#### 3.Use two M3x20 mm screws to drill on the top hole of the two T-shape bars.
#### 4.Fix the M3 screw locks at the end to stabilize the screws.



#### Potential Issues
If you are having trouble connecting to the EC2 instance, you can follow this [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html) about SSH connection to EC2.
 

#### Potential Errors
Some most of the errors that were encountered when deploying the website appeared during the build phase of the deployment. If you do get an error, you can click on the stage that failed during deployment to view the console logs. The most common errors were missing libraries (which can be added to the script above) or common coding mistakes as undeclared variables.  

## Contact
If there are any further questions about the application project, please contact the lead developer via email.
* liaophie@bu.edu

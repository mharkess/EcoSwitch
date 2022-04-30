# EcoSwitch Installation and Casing
## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#hardware-module-overview">Hardware Module Overview</a>
          </li>
    <li>
      <a href="#Designing casing for EcoSwitch">Designing casing for EcoSwitch</a></li>
    <li>
      <a href="#EcoSwitch Installation Steps">EcoSwitch Installation Steps</a>
    </li>
  <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>

## About the Project
The EcoSwitch device installation involves assembling and mounting on the Fan Control Unit(FCU). The original problem statement required the EcoSwitch device to be safely mounted on the FCU dial and temper proof. 

## Hardware Module Overview
The device comes with a battery pack connected to a rectangular box which is the circuit and driver for the device. Also, there should be another longer rectangular box with four M4 screws and two M3 screws. The installation steps below show how to assemble the whole device and mount it on the top of the FCU dial. Also, instructions for designing those boxes are listed below.
### Designing casing for EcoSwitch
All the designs are done using 3D modeling in Solidworks. The first part is the case for the stepper motor. The purpose of this case is to stabilize the stepper motor when it turns. Therefore, the inner square dimension for the case should be close to the overall dimension of the stepper motor with around 10% tolerance for the error in 3D printing. Also, there should be holes besides for screws to stabilize it and spaces for the wire to come out of the case. The 3D model for this case is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part1.SLDPRT"> casing_for_motor</a>. The drawing of this 3D model is here: <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part1_draw.SLDDRW"> drawing_case_for_motor</a>.
The following diagram is a perpective view for this case.
<img width="668" alt="Screen Shot 2022-04-29 at 8 26 44 PM" src="https://user-images.githubusercontent.com/90203309/166083251-9bbdfed4-f2da-4a0c-9ff0-239c50839130.png">

The motor case is connected with two T-bars beside for stabling the whole device in the two pivots point near the FCU device.
The actual FCU device looks like the following diagram with a red circle as the pivot point.

<img width="345" alt="Screen Shot 2022-03-12 at 9 58 36 PM" src="https://user-images.githubusercontent.com/90203309/166084199-de4c2ef9-8fcf-4f0e-b598-abf65261c6b4.png">
The T-bar has a hole on the top which should be the same size as the pivot holes. Also, two holes beside should have the same dimensions as the side holes in the motor case. The 3D model for the T-bar is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2.SLDPRT"> 3Dmodel_for_T_bar</a>. The drawing of the T-bar is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2_draw.SLDDRW"> Drawing_for_T_bar</a>. The following diagram is a perspective view for this T-bar. 

<img width="387" alt="Screen Shot 2022-04-29 at 9 06 14 PM" src="https://user-images.githubusercontent.com/90203309/166084555-b86361d4-8dca-43de-b6a9-2daff125d67f.png">

The second case is used to cover the whole circuit and driver. It connects with battery outside and motor in the motor case.

The T-bar has a hole on the top which should be the same size as the pivot holes. Also, two holes beside should have the same dimensions as the side holes in the motor case. The 3D model for the T-bar is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2.SLDPRT"> 3Dmodel_for_T_bar</a>. The drawing of the T-bar is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2_draw.SLDDRW"> Drawing_for_T_bar</a>. The following diagram is a perspective view for this T-bar. 
<img width="387" alt="Screen Shot 2022-04-29 at 9 06 14 PM" src="https://user-images.githubusercontent.com/90203309/166084555-b86361d4-8dca-43de-b6a9-2daff125d67f.png">


#### EcoSwitch Installation Steps
Each EcoSwitch device will come prebuilt with a motor, an attachment, a circuit board within the rectangular outer shell, and a battery pack. The device will be mounted on the FCU dial and securely attached to the knob. Then, batteries are needed in the battery pack to power the device and assemble it as follow:
#### 1.Put two T-shape bars beside the rectangle box. 
#### 2.Use four M4x20 mm screws and drill them inside the two holes of the T-shape bars. Also, fix the M4 screw locks at the end to stabilize the screws.
#### 3.Use two M3x20 mm screws to drill on the top hole of the two T-shape bars.
#### 4.Fix the M3 screw locks at the end to stabilize the screws.



## Contact
If there are any further questions about the application project, please contact the lead developer via email.
* liaophie@bu.edu

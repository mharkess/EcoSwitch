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
      <a href="#designing-the-casing-for-the-device">Designing the Casing for the Device</a></li>
    </li>
    <li>
      <a href="#ecoSwitch-device-installation-steps">EcoSwitch Device Installation Steps</a>
    </li>
  <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>

## About the Project
<p align="justify">The EcoSwitch device's installation involves assembling and mounting it on the Fan Control Unit (FCU). The original problem statement required the EcoSwitch device to be safely mounted on the FCU dial and tamperproof.</p>

Device Concept:
![device concept](https://user-images.githubusercontent.com/58235369/166089495-faa53973-a2c4-464c-9fb6-f2aa1bf73846.jpg)<p align="justify">

<p align="right">(<a href="#top">back to top</a>)</p>

## Hardware Module Overview
<p align="justify">The device comes with a battery pack connected to a rectangular box which is the circuit and driver for the device. Also, there should be another longer rectangular box with four M4 screws and two M3 screws. The installation steps below show how to assemble the whole device and mount it on the top of the FCU dial. Also, instructions for designing these boxes are listed below.</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Designing the Casing for the Device
<p align="justify">All the designs are done using 3D modeling in Solidworks. The first part is the case for the stepper motor. The purpose of this case is to stabilize the stepper motor when it turns. Therefore, the inner square dimension for the case should be close to the overall dimension of the stepper motor with around 10% tolerance for the error in 3D printing. Also, there should be holes besides for screws to stabilize it and spaces for the wire to come out of the case. The 3D model for this case is here: <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part1.SLDPRT">casing_for_motor</a>. The drawing of this 3D model is here: <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part1_draw.SLDDRW">drawing_case_for_motor</a>.</p>

<p align="justify">The following diagram is a perpective view for this case:</p>

<div align="center">
<img width="668" alt="Screen Shot 2022-04-29 at 8 26 44 PM" src="https://user-images.githubusercontent.com/90203309/166083251-9bbdfed4-f2da-4a0c-9ff0-239c50839130.png">
</div>

<p align="justify">The motor case is connected with two T-bars beside for stabling the whole device in the two pivots point near the FCU device. The actual FCU device looks like the following diagram with a red circle as the pivot point:</p>

<div align="center">
<img width="345" alt="Screen Shot 2022-03-12 at 9 58 36 PM" src="https://user-images.githubusercontent.com/90203309/166084199-de4c2ef9-8fcf-4f0e-b598-abf65261c6b4.png">
</div>

<p align="justify">The T-bar has a hole on the top which should be the same size as the pivot holes. Also, two holes beside should have the same dimensions as the side holes in the motor case. The 3D model for the T-bar is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2.SLDPRT"> 3Dmodel_for_T_bar</a>. The drawing of the T-bar is here: <a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2_draw.SLDDRW">Drawing_for_T_bar</a>. The following diagram is a perspective view for this T-bar:</p>

<div align="center">
<img width="387" alt="Screen Shot 2022-04-29 at 9 06 14 PM" src="https://user-images.githubusercontent.com/90203309/166084555-b86361d4-8dca-43de-b6a9-2daff125d67f.png">
</div>

<p align="justify">The second case is used to cover the whole circuit and driver. It connects with battery outside and motor in the motor case. The 3D model for the base part of circuit case is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/Part2.SLDPRT"> 3Dmodel_for_circuit_case_base</a> and the top part is here:<a href="https://github.com/mharkess/EcoSwitch/blob/main/EcoSwitch_Casing_and_install/toppart.SLDPRT"> 3Dmodel_for_circuit_case_top</a>. The isometric view of the case is as follow: 
  
  <img width="563" alt="Screen Shot 2022-04-29 at 11 06 02 PM" src="https://user-images.githubusercontent.com/90203309/166091464-fdfa3705-7940-4750-a4aa-72ba41ad48af.png">
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## EcoSwitch Device Installation Steps
<p align="justify">Each EcoSwitch device will come prebuilt with a motor, an attachment, a circuit board within the rectangular outer shell, and a battery pack. The device will be mounted on the FCU dial and securely attached to the knob. Then, batteries are needed in the battery pack to power the device and assemble it as follow:</p>

1. Put two T-shape bars beside the rectangle box. 
2. Use four M4x20 mm screws and drill them inside the two holes of the T-shape bars. Also, fix the M4 screw locks at the end to stabilize the screws.
3. Use two M3x20 mm screws to drill on the top hole of the two T-shape bars.
4. Fix the M3 screw locks at the end to stabilize the screws.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact
If there are any further questions about the application project, please contact the lead developer via email.
- liaophie@bu.edu

<p align="right">(<a href="#top">back to top</a>)</p>

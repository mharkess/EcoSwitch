# Database and Server Guide
This document will provide the methods to setup a MySQL database and Apache server on AWS. It will also describe the way to add new HTTP pages to the server along with a guide of current API's on the server.

## MySQL setup on Amazon RDS
1. In order to get started, you will need to have an Amazon AWS account. You can sign up for one here: [Amazon AWS](https://aws.amazon.com/free/?trk=ps_a134p000006pklfAAA&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=Bing&sc_category=core&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=amazon%20aws&sc_content=Amazon%20AWS_e&sc_matchtype=e&sc_segment=&sc_medium=ACQ-P|PS-BI|Brand|Desktop|SU|AWS|Core|US|EN|Text&s_kwcid=AL!4422!10!71674567499740!71675011065633&s_kwcid=AL!4422!10!71674567499740!71675011065633&ef_id=d4773c0cc8251c3e64215e0735ed7a46:G:s&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).
1. Once you have signed up for an account you will be greeted by the AWS dashboard. In the upper left corner of the page, click on **Services** and a menu will appear. In that menu, click on
**RDS** and you will be taken to the RDS console. 
1. To create a new database, you will need to create an instance of the database. To do this, click on **Databases** in the menu on the left, then click **Create Database** on the right side of the loaded page  
1. You will be brought to a customization screen for the database hardware specifications. 

## Apache setup on Amazon EC2

## Current Ecoswitch API
Current list of API for EcoSwitch along with examples of valid calls. This is organized by the type of request being made. All of the example JSON's are assuming that you are using 
a JSON stringify function and a HTTP request library like fetch.  

All Requests will come from this URL: `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/`.  

So, to use an API, it would be in the format of: `URL/API`. From the API below, an example would be: `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/addUser?deviceId=<id>`

*Note: If HTTPS is giving issues when implementing the API endpoints, an alternative is using HTTP

### GET Requests
- `/device_dataUpdate.php`
  - Description: Updates temp and humidity of a particular device in the database (device is determined by their ID number)
  - Query Format:
    - `/device_dataUpdate.php?temperature=<temp>&humidity=<humidity>&deviceID=<id>` 
  - Example valid Query:
    - `https://3.12.233.95/device_dataUpdate.php?temperature=22.4&humidity=6.5&deviceID=12345`
  - **Note: Will be changed to a POST request in the future**
- `/allUsers`
  - Description: Retrieves table of all users in the database (table contains user's email, address and room number).
  - Query Format:
    - `/allUsers?deviceID=<id>`
  - Example of valid Query:
    - `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/allUsers?deviceID=12345`     
- `/allRecent`
  - Description: Retrieves table of all devices in the database (table contains device ID, most recent temperature of their room and most recent humidity of their room).
  - Query Format:
    - `/allRecent?deviceID=<id>`
  - Example valid Query:
    - `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/allRecent?deviceID=12345`
- `/tempRequest`
  - Description: Retrieves most recent temperature and humidity of a particular device from the database
  - Query Format:
    - `/tempRequest?DeviceID=<id>`
  - Example valid Query:
    - `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/tempRequest?DeviceID=12345` 
- `/getUser`
  - Description: Retrieves all information related to queried user (Email, Address, Room Number and DeviceID)
  - Query Format:
    - `/getUser?email=<email>`
  - Example valid Query:
    - `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/getUser?email=bob@bu.edu`
  - Return Value Format:
    - {"Student": "TEST@bu.edu", "Address": "101 Bay State Rd", "RoomNumber": "101", "DeviceID": "12345"}    


### POST Requests
- `/addUser`
  - Description: Adds users to a table relating users to the room and address that they are currently residing.
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/addUser`
  - Example valid JSON to send in body:
    - {"Email": "example@gmail.com", "Location": "123 Washington St", "RoomNumber": "1234"} 
- `/adminTempRange`
  - Description: Changes the acceptable temperature range of a room in database and changes them in groups (rooms are grouped by address). Can change min, max or both per call.
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/adminTempRange`
  - Example valid JSON to send in body: 
    - {"Location": "123 Washington St", "mintemp": "5", "maxtemp": "25"} 
    - {"Location": "123 Washington St", "mintemp": "5"}
    - {"Location": "123 Washington St", "maxtemp": "25"}
- `/desiredTemp`
  - Description: Changes the user's desired temperature of the room in the database
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/desiredTemp`
  - Example valid JSON to send in body:
    - {"DeviceID": "12345", "desiredTemp": "10"}
- `/changeState`
  - Description: Locks all devices in a location to a setting of the admin's choosing
    - Note: States are defined as: -1,0,1,2,3. Any value greater than -1 will lock devices to a particular setting. State -1 allows state to be changed by student input. 
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/changeState`
  - Example valid JSON to send in body:
    - {"Location": "25 Bay State Rd", "State": "0"}
- `/removeUser`
  - Description: Removes User from database, user will no longer to be able to control a device
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/removeUser`
  - Example valid JSON to send in body:
    - {"Location": "TEST", "Email": "TEST@bu.edu", "RoomNumber": "101"}
- `/addDevice`
  - Description: Adds devices to a table relating devices to the room and address of the device's location.
  - URL Query:
    -  `https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/addDevice`
  - Example valid JSON to send in body:
    - {"DeviceID": "46826", "Location": "972 Washington St", "RoomNumber": "10348"}  

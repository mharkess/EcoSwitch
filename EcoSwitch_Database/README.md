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

All Requests will come from this URL: `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/`.  

So, to use an API, it would be in the format of: `URL/API`. From the API below, an example would be: `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/addUser.php`

### GET Requests
- `/device_dataUpdate.php`
  - Description: Updates temp and humidity of a particular device in the database (device is determined by their ID number)
  - Query Format:
    - `/device_dataUpdate.php?temperature=<temp>&humidity=<humidity>&deviceID=<id>` 
  - Example valid Query:
    - `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/device_dataUpdate.php?temperature=22.4&humidity=6.5&deviceID=12345`
  - **Note: Will be changed to a POST request in the future**
- `/allUsers.php`
  - Description: Retrieves table of all users in the database (table contains user's email, address and room number).
  - Query Format:
    - `/allUsers.php?deviceID=<id>`
  - Example of valid Query:
    - `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/allUsers.php?deviceID=12345`     
- `/allRecent.php`
  - Description: Retrieves table of all devices in the database (table contains device ID, most recent temperature of their room and most recent humidity of their room).
  - Query Format:
    - `/allRecent.php?deviceID=<id>`
  - Example valid Query:
    - `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/allRecent.php?deviceID=12345`
- `/tempRequest.php`
  - Description: Retrieves most recent temperature and humidity of a particular device from the database
  - Query Format:
    - `/tempRequest.php?DeviceID=<id>`
  - Example valid Query:
    - `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/tempRequest.php?DeviceID=12345`    


### POST Requests
- `/addUser.php`
  - Description: Adds users to a table relating users to the room and address that they are currently residing.
  - Example valid JSON to send:
    - {"Email": "example@gmail.com", "Location": "123 Washington St", "RoomNum": "1234"} 
- `/adminTempRange.php`
  - Description: Changes the acceptable temperature range of a room in database and changes them in groups (rooms are grouped by address). Can change min, max or both per call.
  - Example valid JSON to send: 
    - {"Location": "123 Washington St", "mintemp": "5", "maxtemp": "25"} 
    - {"Location": "123 Washington St", "mintemp": "5"}
    - {"Location": "123 Washington St", "maxtemp": "25"}
- `/desiredTemp.php`
  - Description: Changes the user's desired temperature of the room in the database
  - Example valid JSON to send:
    - {"DeviceID": "12345", "desiredTemp": "10"}
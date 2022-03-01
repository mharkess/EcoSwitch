import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';
import styles from './styles.js'

const Stack = createNativeStackNavigator();

const MINUTE_MS = 60000

export default function App() {
  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );
  const [deviceID, setDeviceID] = useState('12345');
  const [tempMetric, setTempMetric] = useState('F');
  const [lastUpdated, setLastUpdated] = useState('Last Updated: ---');
  const [desiredTemp, setDesiredTemp] = useState('');
  const [status, setStatus] = useState('');

  const recentData_api = `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/tempRequest.php?deviceID=${deviceID}`
  const desiredTemp_api = 'http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/desiredTemp.php'


  async function updateRecentData() {
    try {
      const response = await fetch(recentData_api, {
        method: 'GET'
      });

      const responseJSON = await response.json();

      if (tempMetric == 'F') {
        var conversion = Math.round(responseJSON['Temp'] * 9/5 + 32)
        responseJSON['Temp'] = conversion;
      }

      setRecentData(responseJSON);
      setLastUpdated(`Last Updated: ${currentTime()}`)

    } catch (error) {
      console.error(error)
    }
  }


  function sendDesiredTemp() {
    try {
      return fetch(desiredTemp_api, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          "deviceID": deviceID,
          "desiredTemp": String(desiredTemp)
        })
      })
      
    } catch (error) {
      console.error(error)
    }
  }


  function currentTime() {
    var d = new Date(),
    n = '',
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();

    if (h > 12 && h < 24) {
      h = h - 12;
      n = 'PM';
    }
    else if (h == 24) {
      h = h - 12;
      n = 'AM';
    }
    else {
      n = 'PM'
    }

    return(h + ':' + m + ' ' + n);
  }


  function setHandler() {
    var isEmpty = false;
    if (desiredTemp == '') isEmpty = true;

    sendDesiredTemp(); 
    setDesiredTemp(''); 

    if (!isEmpty) setStatus('Success!')
    else setStatus('Empty field')
    setTimeout(() => {setStatus('')}, 5000)
  }


  function changeTempMetric() {
    if (tempMetric == 'C') {
      var conversion = Math.round(recentData['Temp'] * 9/5 + 32)
      setRecentData({"Temp": conversion, "Humidity": recentData['Humidity']})
      setTempMetric('F');
    }
    else if (tempMetric == 'F') {
      var conversion = Math.round((recentData['Temp'] - 32) * 5/9)
      setRecentData({"Temp": conversion, "Humidity": recentData['Humidity']})
      setTempMetric('C');
    }
  }


  function LoginScreen({ navigation }){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessble={false}>
        <View style={styles.container}>
          <Image source={logo_text} style={styles.logo_text} />

          {/* will need some functions here for Google Auth */}
          <TextInput 
            style={styles.input} 
            onBlur={Keyboard.dismiss} 
            placeholder="Username" 
          />

          <TextInput 
            style={styles.input} 
            onBlur={Keyboard.dismiss} 
            secureTextEntry={true} 
            placeholder="Password" 
          />
          
          <Pressable style={styles.button} onPress={() => navigation.push('Main Menu')}>
            <Text style={styles.text}>Continue</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    );
  }


  // needs a logout function to return to login page
  function MainMenu({ navigation }) { 
    // used to periodically refresh data
    useEffect(() => {
      //updateRecentData();  // currently updates too frequently...
      const interval = setInterval(() => {
        updateRecentData()
        }, MINUTE_MS*5) // 5 minute updates
      return () => clearInterval(interval);
    }, []);

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessble={false}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <TouchableOpacity style={styles.return_button} onPress={() => navigation.push('Login Screen')}>
            <Text style={styles.return_text}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logo} onPress={() => navigation.push('Credits')}>
            <Image source={logo} style={{height:60, width:60}} />
          </TouchableOpacity>

          <KeyboardAvoidingView style={styles.displayBox} behavior="padding">
            <Text style={styles.tempNum_text}>
              {Math.round(recentData['Temp'])} °{tempMetric}
            </Text>
            <Text style={styles.temp_text}>
              TEMPERATURE
            </Text>

            <Text style={styles.line}>────────────</Text>
            
            <Text style={styles.humidNum_text}>
              {Math.round(recentData['Humidity'])}%
            </Text>
            <Text style={styles.humid_text}>
              HUMIDITY
            </Text>

            <TouchableOpacity style={styles.update_button} onPress={() => updateRecentData() }>
              <Text style={styles.update_text}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.metric_button} onPress={() => changeTempMetric() }>
              <Text style={styles.metric_text}>F/C</Text>
            </TouchableOpacity>

            <Text style={styles.update_time_text}>{lastUpdated}</Text>
          </KeyboardAvoidingView>

          <View>
          <TextInput 
            style={styles.set_input} 
            onChangeText={text => setDesiredTemp(text)}
            value={desiredTemp}
            placeholder={'Desired Temparture (°' + tempMetric + ')'}
            keyboardType="numeric"
          />
          <Text style={styles.status_text}>{status}</Text>
          </View>

          <TouchableOpacity style={styles.set_button} onPress={() => setHandler()}>
              <Text style={styles.set_text}>SET</Text>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }


  function Credits({ navigation }) {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.return_button} onPress={() => navigation.push('Main Menu')}>
          <Text style={styles.return_text}>Go Back</Text>
        </TouchableOpacity>

        <Text>Jiawei Liao{'\n'}Keven DeOliveira{'\n'}Michelle Thevenin{'\n'}Samarah Uriarte{'\n'}Michael Harkess</Text>
      </View>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="Credits" component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

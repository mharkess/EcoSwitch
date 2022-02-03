import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, Pressable, Image, TouchableOpacity, Keyboard } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';
import styles from './styles.js'

const Stack = createNativeStackNavigator();

export default function App() {
  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );
  const [deviceID, setDeviceID] = useState('12345');
  const [tempMetric, setTempMetric] = useState('C');
  const [lastUpdated, setLastUpdated] = useState('Last Updated: ---');

  const api_url = `http://ec2-3-135-202-255.us-east-2.compute.amazonaws.com/tempRequest.php?deviceID=${deviceID}`


  async function updateRecentData() {
    try {
      const response = await fetch(api_url, {
        method: 'GET'
      });
      const responseJSON = await response.json();
      console.log(responseJSON);
      setRecentData(responseJSON);
      setLastUpdated(`Last Updated: ${currentTime()}`)
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
    );
  }


  // needs a logout function to return to login page
  function MainMenu({ navigation }) { 
    // used to periodically refresh data
    useEffect(() => {
      //updateRecentData(url);  // currently updates too frequently... removing this allows 1 minute updates, but doesn't update on first render
      const interval = setInterval(() => {
        updateRecentData()
        }, 60000*5) // half-minute updates
      return () => clearInterval(interval);
    }, []);

    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.return_button} onPress={() => navigation.push('Login Screen')}>
          <Text style={styles.return_text}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logo} onPress={() => navigation.push('Credits')}>
          <Image source={logo} style={{height:60, width:60}} />
        </TouchableOpacity>

        <View style={styles.displayBox}>
          <Text>Temperature: {recentData['Temp']}°{tempMetric}</Text>
          <Text>Humidity: {recentData['Humidity']}%</Text>

          <TouchableOpacity style={styles.update_button} onPress={() => updateRecentData() }>
            <Text style={styles.update_text}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.metric_button} onPress={() => changeTempMetric() }>
            <Text style={styles.metric_text}>F/C</Text>
          </TouchableOpacity>

          <Text style={styles.update_time_text}>{lastUpdated}</Text>
        </View>
        
      </View>
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

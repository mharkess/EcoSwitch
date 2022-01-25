import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, TouchableOpacity, Keyboard } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import axios, * as others from 'axios';
import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';
import styles from './styles.js'

const Stack = createNativeStackNavigator();

export default function App() {

  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );
  const [deviceID, setDeviceID] = useState('12345');
  const [tempMetric, setTempMetric] = useState('C');

  const url = 'http://155.41.32.73:8081/api/get'; // needs to be configured depending on location (while using independent backend server)


  async function updateRecentData(url) { // need to add a try/catch block for error catching
    await axios.get(url) 
      .then((response) => {
        setRecentData(response.data)
      });
  };


  function changeTempMetric() {
    if (tempMetric == 'C') {
      var conversion = Math.round(recentData['Temp'] * 9/5 + 32)
      setRecentData({"Temp": conversion, "Humidity": recentData['Humidity']})
      setTempMetric('F');
    }
    else {
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
          placeholder="BU Login Name" 
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
        updateRecentData(url)
      }, 10000) // half-minute updates
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
          <TouchableOpacity style={styles.update_button} onPress={() => updateRecentData(url) }>
            <Text style={styles.update_text}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.metric_button} onPress={() => changeTempMetric() }>
            <Text style={styles.metric_text}>F/C</Text>
          </TouchableOpacity>
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

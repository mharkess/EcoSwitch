import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';
import styles from './styles.js'

const Stack = createNativeStackNavigator();

const MINUTE_MS = 60000

var firstRender = true;

export default function App() {
  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );
  const [deviceID, setDeviceID] = useState('12345');
  const [tempMetric, setTempMetric] = useState('F');
  const [lastUpdated, setLastUpdated] = useState('Last Updated: ---');
  const [desiredTemp, setDesiredTemp] = useState('');
  const [status, setStatus] = useState('');
  const [handle, setHandle] = useState(false);

  const recentData_api = `http://3.12.233.95/tempRequest.php?deviceID=${deviceID}`
  const desiredTemp_api = 'http://3.12.233.95/desiredTemp.php'

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
      setLastUpdated(`Last Updated: ${currentTime()}`);

    } catch (error) {
      console.error(error)
    }
  }


  function sendDesiredTemp() {
    if (!desiredTemp || desiredTemp == '') return;
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
      .then(response => {
        return response.status;
      })
      .then(res => {
        if (res == 200 && desiredTemp) setStatus("Success!")
        else if (res != 200) setStatus("Connection Error. Please try again.")
        setTimeout(() => {setStatus('')}, 7000)
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
    const [enabled, setEnabled] = useState("");

    function setHandler() {
      setDesiredTemp(enabled);
      setHandle(!handle)
    }

    // wait for setHandler to finish
    useEffect(() => {
      sendDesiredTemp(); 
      setDesiredTemp(''); 
    }, [handle])

    // used to periodically refresh data
    useEffect(() => {
      if (firstRender) {
        firstRender = false;
        updateRecentData()
      }
      const interval = setInterval(() => {
        updateRecentData()
        }, MINUTE_MS/12)
      return () => clearInterval(interval);
    }, [recentData]);

    return(
      <TouchableWithoutFeedback keyboardShouldPersistTaps='handled' onPress={Keyboard.dismiss} accessble={false}>
        <KeyboardAvoidingView keyboardShouldPersistTaps='handled' style={styles.container} behavior="padding">
          <TouchableOpacity style={styles.return_button} onPress={() => navigation.push('Login Screen')}>
            <Text style={styles.return_text}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logo} onPress={() => navigation.push('Credits')}>
            <Image source={logo} style={{height:60, width:60}} />
          </TouchableOpacity>

          <KeyboardAvoidingView keyboardShouldPersistTaps='handled' style={styles.displayBox} behavior="padding">
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

            <TouchableOpacity style={styles.metric_button} onPress={changeTempMetric}>
              <Text style={styles.metric_text}>°{tempMetric}</Text>
            </TouchableOpacity>

            <Text style={styles.update_time_text}>{lastUpdated}</Text>
          </KeyboardAvoidingView>

          <View keyboardShouldPersistTaps='handled'>
          <TextInput 
            style={styles.set_input} 
            value={enabled}
            onChangeText={(val) => setEnabled(val)}
            placeholder={'Desired Temparture (°' + tempMetric + ')'}
            keyboardType="numeric"
          />
          <Text style={styles.status_text}>{status}</Text>
          </View>

          <TouchableOpacity style={styles.set_button} onPress={setHandler}>
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

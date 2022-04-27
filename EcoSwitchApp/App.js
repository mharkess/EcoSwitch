import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google'

import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';
import styles from './styles.js'

const Stack = createNativeStackNavigator();

const MINUTE_MS = 60000

var firstRender = true;

export default function App() {
  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );
  const [deviceID, setDeviceID] = useState('');
  const [tempMetric, setTempMetric] = useState('F');
  const [lastUpdated, setLastUpdated] = useState('Last Updated: ---');
  const [desiredTemp, setDesiredTemp] = useState('');
  const [status, setStatus] = useState('');
  const [handle, setHandle] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '912777404682-574ej0sp9ctnll50hjctsvlb101aegb2.apps.googleusercontent.com',
  });

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


  async function sendDesiredTemp() {
    if (!desiredTemp || desiredTemp == '') return;
    try {
      return await fetch(desiredTemp_api, {
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
        setTimeout(() => {setStatus('')}, 6000)
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
    var access_token;

    async function fetchUserGoogleInfo(token) {
      try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
      
        return await response.json();
    } catch(error) {
      console.error(error)
    }
    }

    async function retrieveUserInfo(token) {
      try {
        const response = await fetch(`https://tyd5faaoq0.execute-api.us-east-2.amazonaws.com/Test/getUser?email=${token}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
      
        return await response.json();
    } catch(error) {
      console.error(error)
    }
    }

    async function retrieveDeviceID(){
      try {
        const googleUser = await fetchUserGoogleInfo(access_token);
        var googleEmail = googleUser.email;

        // can set to accept bu emails only
        // if (googleUser.hd != "bu.edu") {
        //   return;
        // }

        var userInfo = await retrieveUserInfo(googleEmail)
        setDeviceID(String(userInfo.DeviceID))

        if (deviceID && deviceID != '') {
          navigation.navigate('Main Menu')
        }
      } catch(error) {
        console.error(error)
      }
    }

    useEffect(() => {
      if (response?.type === 'success') {
        access_token = response.authentication.accessToken;
        retrieveDeviceID();
      }
    }, [response]);

    /*
    Sign in button currently uses expo.io as proxy to use Google AuthSession
    To directly use google.com, pass useProxy: false to promptAsync()
    However, there is a known bug that this leads to failure using the current version
    of expo-auth-session/providers/google.

    For now
    */
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessble={false}>
        <View style={styles.container}>
          <Image source={logo_text} style={styles.logo_text} />
          <Pressable style={styles.button} onPress={() => promptAsync()}> 
            <Text style={styles.text}>Sign in with Google</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    );
  }


  // needs a logout function to return to login page
  function MainMenu({ navigation }) { 
    const [enabled, setEnabled] = useState("");

    function handleLogOut() {
      navigation.navigate('Login Screen')
    }

    function setHandler() {
      if (tempMetric == 'F') {
        var conversion = Math.round((enabled - 32) * 5/9)
        setDesiredTemp(conversion)
        setHandle(!handle)
        return
      }

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
        }, MINUTE_MS/6)
      return () => clearInterval(interval);
    }, [recentData]);

    return(
      <TouchableWithoutFeedback keyboardShouldPersistTaps='handled' onPress={Keyboard.dismiss} accessble={false}>
        <KeyboardAvoidingView keyboardShouldPersistTaps='handled' style={styles.container} behavior="padding">
          <TouchableOpacity style={styles.return_button} onPress={() => handleLogOut()}>
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

import React, { useState, useEffect } from 'react';
import { Component, StyleSheet, Text, View, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';

import mysql from 'mysql';
import axios, * as others from 'axios';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import logo_text from './assets/ecoswitch_icon_text.png';
import logo from './assets/ecoswitch_icon_white.png';

const deviceID = 1234;
const Stack = createNativeStackNavigator();


export default function App() {

  const [recentData, setRecentData] = useState( {"Temp": "0", "Humidity": "0"} );

  async function updateRecentData() {
    var temp = {}
    await axios.get('http://172.17.0.1:8081/api/get')
      .then((response) => {
        temp = response.data
        setRecentData(temp)
      });

    setRecentData(temp)
  };

  function LoginScreen({ navigation }){
    return(
      <View style={styles.container}>
        <Image source={logo_text} style={styles.logo_text} />

        {/* will need some functions here to access BU login */}
        <TextInput style={styles.input} placeholder="BU Login Name" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
        
        <Pressable style={styles.button} onPress={() => navigation.push('Main Menu')}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>

      </View>
    );
  }

  // needs a logout function to return to login page
  function MainMenu({ navigation }) {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => updateRecentData()} />
        <TouchableOpacity style={styles.logo} onPress={() => navigation.push('Credits')}>
          <Image source={logo} style={{height:60, width:60}} />
        </TouchableOpacity>
        <View style={styles.displayBox}>
          <Text>Temp: {recentData['Temp']}</Text>
          <Text>Humidity: {recentData['Humidity']}</Text>
        </View>
      </View>
    );
  }

  function Credits({ navigation }) {
    return(
      <View style={styles.container}>
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

// some styles use "absolute" positioning, which might appear differently on different phones... need to test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e6d8', //'#e2e9e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_text: {
    width: 220, 
    height: 220,
    position: 'absolute',
    bottom: 540,
    alignItems:'center',
    resizeMode: 'contain',
  },
  logo: {
    width: 5, 
    height: 5,
    position: 'absolute',
    top: 40,
    right: 40,
    padding: 10,
    alignItems:'center',
  },
  button: {
    height: '5%',
    position: 'absolute',
    bottom: 340,
    left: 57,
    width: 150,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#7d947a',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: .5,
    color: 'white',
  },
  input: {
    width: 300,
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  displayBox: {
    alignItems: 'center',
    bottom: 150,
    width: 390,
    height: 350,
    margin: 8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#f4f6f3',
    backgroundColor: '#f4f6f3',
  },
});

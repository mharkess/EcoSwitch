import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import logo from './assets/ecoswitch_icon_text.png';

const Stack = createNativeStackNavigator();

export default function App() {

  function LoginScreen({ navigation }){
    return(
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        
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
        <Text>Stuff goes here</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Main Menu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e6d8', //'#e2e9e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220, 
    height: 220,
    position: 'absolute',
    bottom: 540,
    alignItems:'center',
    resizeMode: 'contain',
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
    elevation: 3,
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
});

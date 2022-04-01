import { StyleSheet } from "react-native";

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
      bottom: 510,
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
      bottom: 314,
      left: 45,
      width: 150,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#7d947a',
    },
    set_button: {
      bottom: -30,
      height: 50,
      width: 150,
      margin: -25,
      paddingVertical: 8,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#7d947a',
    },
    return_button: {
      height: 100,
      width: 150,
      position: 'absolute',
      top: 70,
      left: 20,
      borderRadius: 4,
      backgroundColor: '#d8e6d8',
    },
    metric_button: {
      width: 50, 
      height: 50,
      position: 'absolute',
      top: 40,
      right: 40,
      padding: 10,
      alignItems:'center',
      borderRadius: 90,
      backgroundColor: '#7d947a',
    },
    text: {
      fontSize: 20,
      lineHeight: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      letterSpacing: .5,
      color: 'white',
    },
    set_text: {
      fontSize: 20,
      lineHeight: 35,
      fontWeight: 'bold',
      alignSelf: 'center',
      letterSpacing: .5,
      color: 'white',
    },
    metric_text: {
      fontSize: 20,
      left: 13,
      bottom: 13,
      alignContent: 'center',
      color: 'white',
      position: 'absolute',
    },
    return_text: {
      color: '#7d947a', 
      fontWeight: 'bold', 
      fontSize: 24,
    },
    update_time_text: {
      color: '#008500',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
    status_text: {
      margin: -5,
      bottom: 70,
      fontWeight: 'bold',
    },
    tempNum_text: {
      fontSize: 50,
      fontFamily: 'Avenir-Light',
      top: 10,
      right: 100,
    },
    temp_text: {
      fontSize: 20,
      fontFamily: 'Avenir-Light',
      bottom: 90,
      right: 100,
      color: '#008500',
    },
    humidNum_text: {
      fontSize: 50,
      fontFamily: 'Avenir-Light',
      top: 70,
      right: 110,
    },
    humid_text: {
      fontSize: 20,
      fontFamily: 'Avenir-Light',
      bottom: 30,
      right: 110,
      color: '#008500',
    },
    line: {
      top: 10,
      right: 90,
      color: '#008500',
      fontWeight: 'bold',
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
    set_input: {
      bottom: 20,
      margin: -10,
      width: 300,
      height: 40,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 8,
    },
    displayBox: {
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 120,
      width: 390,
      height: 350,
      margin: 8,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#f4f6f3',
      backgroundColor: '#f4f6f3',
    },
  });

  export default styles;
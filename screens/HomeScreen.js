import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


class HomeScreen extends Component {
  render(){
    return (
      <View style={{height: 667, backgroundColor: "#F3F3F3"}}>
        <View style={StyleSheet.mainbody}>
          <View style={styles.welcomeContainer}>
            <Image style={styles.imgLogin}
              source={
                __DEV__
                  ? require('../assets/images/fluidity-image.png')
                  : require('../assets/images/fluidity-image.png')
              }
            />
            <View>
              <Text style={styles.labeluser}>
                Username
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeScreen

const styles = {
  mainbody: {
    flex: 1
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  imgLogin: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  labeluser: {
    fontSize: 20,
    color: "#414E93"
  }
}
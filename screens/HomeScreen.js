import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  // Alert,
  // AsyncStorage
} from 'react-native';
// import $ from 'jquery'; 

// import { Item } from 'native-base'
// import { TextInput } from 'react-native-gesture-handler';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    // this.handleClick = this.handleClick.bind(this);

  }


  // handleClick = () => {
  //   const { text } = this.state;
  //   Alert.alert(text);
  // }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.mainBody}>
          <View style={styles.welcomeContainer}>
            <Image style={styles.imgLogin}
              source={
                __DEV__
                  ? require('../assets/images/fluidity-image.png')
                  : require('../assets/images/fluidity-image.png')
              }
            />
          </View>
          <View>
            {/* <TextInput 
                placeholder="Type here to translate!"
                style={{height: 40}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              /> */}
             <Text style={styles.labelUser}>
                Username
             </Text>

              {/* <Button
          title="Press me"
          onPress={this.handleClick}
          />  */}
            
              <TextInput style={styles.inputUser} placeholder='username' />  
          </View>


        </View>
      </View>
    )
  }
}

export default HomeScreen;

const styles = {
  container: {
    height: 667, 
    backgroundColor: "#F3F3F3",
  },
  mainBody: {
    flex: 1,
    marginRight: 24,
    marginLeft: 24,
    backgroundColor: "#EDF1FA",
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
  labelUser: {
    fontSize: 20,
    color: "#414E93",
    marginBottom: 8,
  },
  inputUser: {
    width: 280,
    height: 45,
    borderColor: 'red',
    backgroundColor: "#414E93",
    borderRadius: 8
  },
}
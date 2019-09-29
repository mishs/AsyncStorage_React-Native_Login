import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  KeyboardAvoidingView,
  // Button,
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
      text: '',
      username: '',
      password: ''
    };
    // this.handleClick = this.handleClick.bind(this);

  }


  // handleClick = () => {
  //   const { text } = this.state;
  //   Alert.alert(text);
  // }
  detailsValidate = () => {
    const { username, password } = this.state;
    
  }

  render(){
    return (
    <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
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
  {/* Username Input Area */}
             <View style={{marginBottom: 14}}> 
               <TouchableOpacity> 
                  {/* <Text style={styles.labelUser}>
                      Username
                  </Text> */}

                    {/* <Button
                title="Press me"
                onPress={this.handleClick}
                />  */}
                  
                    <TextInput autoCapitalize='none' style={styles.inputUser} placeholder='username' />
                </TouchableOpacity>  
              </View>

{/* Password Input Area  */}
              <View style={{marginBottom: 25}}>  
                <TouchableOpacity>
                  {/* <Text style={styles.labelUser}>
                      Password
                  </Text> */}
                

                    {/* <Button
                title="Press me"
                onPress={this.handleClick}
                />  */}
                  
                    <TextInput secureTextEntry={true} autoCapitalize='none' style={styles.inputUser} placeholder='password' />  
                </TouchableOpacity>
              </View>
          </View>

{/* Save button */}
          <TouchableOpacity style={styles.buttonContainer}>
            {/* <Button
              title="Save"
              color=""
              style={styles.btn}
            /> */}
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
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
    marginTop: 30,
    marginBottom: 20,
  },
  imgLogin: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  // labelUser: {
  //   fontSize: 20,
  //   color: "#414E93",
  //   marginBottom: 8,
  // },
  inputUser: {
    width: 280,
    height: 40,
    borderColor: '#435190',
    backgroundColor: "#026AA7",
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'normal',
  },
  buttonContainer: {
    width: 280,
    height: 45,
    borderRadius: 5,
    marginRight: 60,
    backgroundColor: "#40A9F3",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
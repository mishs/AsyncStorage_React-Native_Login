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
  Alert,
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

  detailsValidate = () => {
    const { username, password } = this.state;
    if(username == '' && password == '') {
      Alert.alert('Please enter both details');
    }else if(username == 'admin' && password == '1234'){
      Alert.alert('Saved!');
    }else {
      Alert.alert('Missing data');
    }
    
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
             <View style={{marginBottom: 14}}> 
               <TouchableOpacity> 
                    <TextInput 
                     autoCapitalize='none' 
                     style={styles.inputUser} 
                     placeholder='username'
                     onChangeText={username => this.setState({username})} 
                     />
                </TouchableOpacity>  
              </View>

{/* Password Input Area  */}
              <View style={{marginBottom: 25}}>  
                <TouchableOpacity>                  
                    <TextInput 
                     secureTextEntry={true} 
                     autoCapitalize='none' 
                     style={styles.inputUser} 
                     placeholder='password'
                     onChangeText={password => this.setState({password})}
                      />  
                </TouchableOpacity>
              </View>
          </View>

{/* Save button */}
          <TouchableOpacity onPress={this.detailsValidate} style={styles.buttonContainer}>
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
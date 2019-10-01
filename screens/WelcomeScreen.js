import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Screen3 from './Screen3';

class WelcomeScreen extends Component {

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text>Welcome to Screen 2</Text>
        <TouchableOpacity onPress={this.detailsValidate} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Click Button to Visit Screen 3</Text>
        </TouchableOpacity>
        <Button
        title="Go Screen 3"
        onPress={() =>this.props.navigation.navigate('Screen3')
        }
      />
      </ScrollView>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#EF476F",
  },
  buttonContainer: {
    width: 280,
    height: 45,
    borderRadius: 5,
    marginRight: 60,
    backgroundColor: '#40A9F3',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

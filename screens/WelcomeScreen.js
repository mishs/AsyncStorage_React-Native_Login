import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Welcome to Screen 2</Text>
      <TouchableOpacity onPress={this.nextScreen} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Click Button to Visit Screen 3</Text>
          </TouchableOpacity>
    </ScrollView>
  );
}

WelcomeScreen.navigationOptions = {
  title: 'Screen 2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'red',
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
  },
});

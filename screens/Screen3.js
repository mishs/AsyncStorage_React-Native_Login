import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Screen3() {
  return (
    <ScrollView style={styles.container}>
    <Text>Welcome to Screen 3</Text>
    <TouchableOpacity onPress={this.detailsValidate} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Click to Get Back to Screen 2</Text>
        </TouchableOpacity>
  </ScrollView>
);
}

Screen2.navigationOptions = {
  title: 'Screen2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#7B1EA2',
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
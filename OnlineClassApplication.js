import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnlineClassApplication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Online Class Application Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnlineClassApplication;

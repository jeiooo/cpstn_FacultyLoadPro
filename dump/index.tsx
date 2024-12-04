import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FacultyLoadProLogin = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('USER');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Basic validation logic
    if (email === 'user@example.com' && password === 'USER') {
      navigation.navigate('Dashboard2');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}

{/*    # UNFINISHED NI SYA NA LOGO


      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/facultyloadpro.png')}
          style={{ width: 400, height: 400 }}
        />
      </View>



*/}

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FacultyLoadProLogin;
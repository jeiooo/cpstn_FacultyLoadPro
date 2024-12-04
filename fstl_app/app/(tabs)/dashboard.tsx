import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    // Navigate to another screen (e.g., "Details")
    navigation.navigate('Details' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the HomePage!</Text>
      <Text style={styles.subtitle}>
        Explore the app and discover amazing features.
      </Text>
      <Button title="Go to Details" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});

export default HomePage;

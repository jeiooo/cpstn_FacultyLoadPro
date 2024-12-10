import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navigateToProfile = () => {
    setDropdownVisible(false); // Close dropdown
    navigation.navigate('ProfilePage'); // Navigate to ProfilePage
  };

  const handleLogout = () => {
    setDropdownVisible(false); // Close dropdown
    navigation.replace('FacultyLoadProLogin'); // Navigate back to Login
  };

  const navigateToPage = (page) => {
    setDropdownVisible(false); // Close dropdown
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require('../LastnaApp/assets/images/ustplogo.png')} // Update the path to match your project structure
          style={styles.logo}
        />
        <Text style={styles.title}>
          University of Science and Technology of Southern Philippines
        </Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={require('../LastnaApp/assets/images/iconuser.png')} // Replace with your user icon path
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={navigateToProfile} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>Welcome to the Dashboard!</Text>

        <View style={styles.grid}>
          <TouchableOpacity style={[styles.gridItem, styles.blue]} onPress={() => navigateToPage('FacultySchedule')}>
            <FontAwesome name="calendar" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Faculty Schedule & Teaching Load</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, styles.red]} onPress={() => navigateToPage('OnlineClassApplication')}>
            <FontAwesome name="file" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Online Class Application Form</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, styles.yellow]} onPress={() => navigateToPage('CertificationOfAccomplishment')}>
            <FontAwesome name="certificate" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Certification of Accomplishment of Quasi-Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, styles.green]} onPress={() => navigateToPage('TeacherLoadProgram')}>
            <FontAwesome name="file" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Teacher Load Program</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#201B50',
    padding: 10,
    paddingTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  userIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  dropdown: {
    position: 'absolute',
    top: 70,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingVertical: 5,
    zIndex: 1000, // Ensure dropdown is on top
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  gridIcon: {
    marginBottom: 8,
  },
  gridText: {
    textAlign: 'center',
    color: 'black',
  },
  blue: {
    backgroundColor: '#79A1F0',
  },
  red: {
    backgroundColor: '#F07979',
  },
  yellow: {
    backgroundColor: '#F0EC79',
  },
  green: {
    backgroundColor: '#89F079',
  },
});

export default Dashboard;

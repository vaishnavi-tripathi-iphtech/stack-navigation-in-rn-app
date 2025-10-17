import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appnav';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route, navigation }: Props) => {
  const { userId, userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile screen</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.key}>User ID:</Text>
        <Text style={styles.value}>{userId}</Text>
        
        <Text style={styles.key}>User name:</Text>
        <Text style={styles.value}>{userName}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserList')}
        >
          <Text style={styles.buttonText}>Go to User List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#f5f5f5ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20
  },
  key: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080808ff',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
 buttonContainer: {
    backgroundColor: "#218ed2ff",
    padding: 12,
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
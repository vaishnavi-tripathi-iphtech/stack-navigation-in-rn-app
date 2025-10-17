import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appnav';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen! </Text>
      
      <View >
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => navigation.navigate('Profile', { 
            userId: '111', 
            userName: 'xyz' 
          })}
        >
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.buttonContainer}
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

export default HomeScreen;
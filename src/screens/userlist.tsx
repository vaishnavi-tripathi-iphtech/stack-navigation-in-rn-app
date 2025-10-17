import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appnav';

type Props = NativeStackScreenProps<RootStackParamList, 'UserList'>;

interface User {
  id: string;
  name: string;
}

const UserListScreen = ({ navigation }: Props) => {
  // Sample user data
  const users: User[] = [
    { id: '1', name: 'alpha' },
    { id: '2', name: 'beta' },
    { id: '3', name: 'gamma' },
    { id: '4', name: 'delta' },
    { id: '5', name: 'epsilon' },
  ];

  const renderUserItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('Profile', { 
        userId: item.id, 
        userName: item.name 
      })}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userSubtext}>Tap to view profile</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 10,
  },
  userItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  userSubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default UserListScreen;
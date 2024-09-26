import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const campuses = [
  { id: '1', address: '84 Market St, Johannesburg Central, Johannesburg' },
  { id: '2', address: '1 Simmons Street, Johannesburg Central, Johannesburg' },
  { id: '3', address: '32 Diagonal Street, Johannesburg Central, Johannesburg' },
];

const ContactUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../Assets/ETN-logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Contact Us</Text>
      
      <View style={styles.contactRow}>
        <Icon name="phone" size={24} style={styles.icon} />
        <Text style={styles.contactText}>(+27) 456-7890</Text>
      </View>
      
      <View style={styles.contactRow}>
        <Icon name="email" size={24} style={styles.icon} />
        <Text style={styles.contactText}>empoweringTheNation@africa.com</Text>
      </View>

      <FlatList
        data={campuses}
        renderItem={({ item }) => <Text style={styles.address}>{item.address}</Text>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.addressList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 18,
    textAlign: 'center',
  },
  addressList: {
    marginTop: 20,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ContactUs;

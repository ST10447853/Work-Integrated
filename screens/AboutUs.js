import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../Assets/ETN-logo.png')} style={styles.logo} />
      
      <Text style={styles.heading}>About Us</Text>
      
      <Text style={styles.aboutText}>
        We are a SME we were established in 2018 the person who started this companys name is Precious Radebe the Purpose of our Businessis to proivde skills for domestic workers abd gardeners.
        We also want to help disadvantaged people who might not have the resources to study further or learn new skills,The reason we do this is so that the individuals can recieve higher wages 
        and learn new skills,we also highly ecourage and teach entrepreneurship qualities so that individuals can start their own Business.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutUs;

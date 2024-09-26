import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.leftText}>Empowering the Nation</Text>
        <Image source={require('../Assets/ETN-logo.png')} style={styles.logo} />
      </View>
      <Image source={require('../Assets/HomeScreen.jpg')} style={styles.headerImage} />
      <Text style={styles.headerText}>Welcome to Empowering the Nation</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image source={require('../Assets/Long-courses-icon.png')} style={styles.boxImage} />
          <Text style={styles.longcourseHeading}>Long Courses</Text>
          <Text style={styles.longcourseText}>Courses that are six-month long learning programs that take place over 12 weeks.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Long Courses')}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image source={require('../Assets/Short-courses-icon.png')} style={styles.boxImage} />
          <Text style={styles.shortcourseHeading}>Short Courses</Text>
          <Text style={styles.shortcourseText}>Courses that last six weeks, perfect for learning on a time deadline.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Short Courses')}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image source={require('../Assets/AboutUs-image.png')} style={styles.boxImage} />
          <Text style={styles.newCourseHeading}>What inspired us</Text>
          <Text style={styles.newCourseText}>Our story is very unique, learn more about it here</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.buttonText}>Our Story</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image source={require('../Assets/ContactUs-image.png')} style={styles.boxImage} />
          <Text style={styles.newCourseHeading}>Contact Us</Text>
          <Text style={styles.newCourseText}>We are eagar to get to know each and every one of our students and individuals</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.buttonText}>Get In Touch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  box: {
    alignItems: 'center',
    width: '45%', // Adjust width to fit two boxes in a row
  },
  boxImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  longcourseHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  longcourseText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
  shortcourseHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  shortcourseText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;

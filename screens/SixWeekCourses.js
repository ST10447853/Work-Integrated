import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SixweekCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../Assets/Short-courses-icon.png')} style={styles.headerImage} />
      <Text style={styles.headerHeading}>Six-week Courses</Text>
      <Text style={styles.headerText}>Choose course</Text>
      
      <View style={styles.courseBox}>
        <Text style={styles.courseTitle}>Child Minding</Text>
        <Text style={styles.coursePurpose}>To provide basic child and baby care</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ChildMinding')}
        >
          <Text style={styles.buttonText}>View Course</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.courseTitle}>Cooking</Text>
        <Text style={styles.coursePurpose}>To prepare and cook nutritious family meals</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Cooking')}
        >
          <Text style={styles.buttonText}>View Course</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.courseTitle}>Garden Maintenance</Text>
        <Text style={styles.coursePurpose}>To provide basic knowledge of watering, pruning, and planting in a domestic garden</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('GardenMaintenance')}
        >
          <Text style={styles.buttonText}>View Course</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  headerHeading: {
    textAlign: 'center',      
    fontSize: 24,             
    fontWeight: 'bold',       
    marginBottom: 10,        
  },
  headerText: {
    textAlign: 'center',       
    fontSize: 18,              
  },
  courseBox: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coursePurpose: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SixweekCourses;

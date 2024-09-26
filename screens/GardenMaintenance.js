import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GardenMaintenance = ({ navigation }) => {
  const courseName = 'Garden Maintenance';
  const coursePurpose = 'To provide basic knowledge of watering, pruning and planting in a domestic garden';
  const content1 = 'Water restrictions and watering requirements of indigenous and exotic plants';
  const content2 = 'Pruning and propagation';
  const content3 = 'Planting techniques and different plant types';
  const price = 750;

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../Assets/GardenMaintenance.jpg')} style={styles.headerImage} />
      <Text style={styles.courseTitle}>{courseName}</Text>
      <Text style={styles.coursePurposeHeader}>Purpose: </Text>
      <Text style={styles.coursePurpose}>{coursePurpose}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.bulletPointHeader}>Content: </Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content1}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content2}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content3}`}</Text>
      </View>
      <Text style={styles.price}>{`Price: R${price}`}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Info', {
          screen : 'CalculationScreen',
          params: { course: 'Garden Maintenance', selected: true }
        }); 
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  coursePurposeHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  coursePurpose: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    marginBottom: 20,
  },
  bulletPointHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
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

export default GardenMaintenance;

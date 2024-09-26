import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LifeSkills = ({ navigation }) => {
  const courseName = 'Life Skills';
  const coursePurpose = 'To provide skills to navigate basic life necessities';
  const content1 = 'Opening a bank account';
  const content2 = 'Basic labor law (Know your rights)';
  const content3 = 'Basic reading and writing literacy';
  const content4 = 'Basic numeric literacy';
  const price = 1500;

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../Assets/LifeSkills.jpg')} style={styles.headerImage} />
      <Text style={styles.courseTitle}>{courseName}</Text>
      <Text style={styles.coursePurposeHeader}>Purpose: </Text>
      <Text style={styles.coursePurpose}>{coursePurpose}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.bulletPointHeader}>Content: </Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content1}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content2}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content3}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content4}`}</Text>
      </View>
      <Text style={styles.price}>{`Price: R${price}`}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Info', {
          screen : 'CalculationScreen',
          params: { course: 'Life Skills', selected: true }
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

export default LifeSkills;

import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cooking = ({ navigation }) => {
  const courseName = 'Cooking';
  const coursePurpose = 'To prepare and cook nutritious family meals';
  const content1 = 'Nutritional requirements for a healthy body';
  const content2 = 'Types of protein, carbohydrates and vegetables';
  const content3 = 'Planning meals';
  const content4 = 'Preparation and cooking of meals';
  const price = 750;

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../Assets/Cooking.jpg')} style={styles.headerImage} />
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
          screen: 'CalculationScreen',
          params:  { course: 'Cooking', selected: true }
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

export default Cooking;

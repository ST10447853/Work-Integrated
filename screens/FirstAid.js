import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FirstAid = ({ navigation }) => {
  const courseName = 'First Aid';
  const coursePurpose = 'To provide first aid awareness and life support';
  const content1 = 'Wounds and bleeding';
  const content2 = 'Burns and fractures';
  const content3 = 'Emergency scene management';
  const content4 = 'Cardio-pulmonary Resuscitation (CPR)';
  const content5 = 'Repository distress e.g., choking, blocked airway';
  const price = 1500;

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../Assets/FirstAid.jpg')} style={styles.headerImage} />
      <Text style={styles.courseTitle}>{courseName}</Text>
      <Text style={styles.coursePurposeHeader}>Purpose: </Text>
      <Text style={styles.coursePurpose}>{coursePurpose}</Text>
      <View style={styles.contentContainer}>
      <Text style={styles.bulletPointHeader}>Content: </Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content1}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content2}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content3}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content4}`}</Text>
        <Text style={styles.bulletPoint}>{`\u2022 ${content5}`}</Text>
      </View>
      <Text style={styles.price}>{`Price: R${price}`}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Info', {
          screen : 'CalculationScreen',
          params: { course: 'First Aid', selected: true }
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

export default FirstAid;

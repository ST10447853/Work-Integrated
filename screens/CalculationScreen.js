import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, View, Button, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useFocusEffect } from '@react-navigation/native';

const CalculationScreen = ({ route }) => {
  const { course } = route.params || {};

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const [selectedFirstAid, setSelectedFirstAid] = useState(false);
  const [selectedSewing, setSelectedSewing] = useState(false);
  const [selectedLandscaping, setSelectedLandscaping] = useState(false);
  const [selectedLifeSkills, setSelectedLifeSkills] = useState(false);
  const [selectedChildMinding, setSelectedChildMinding] = useState(false);
  const [selectedCooking, setSelectedCooking] = useState(false);
  const [selectedGardenMaintenance, setSelectedGardenMaintenance] = useState(false);

  const courseFees = {
    'First Aid': 1500,
    'Sewing': 1500,
    'Landscaping': 1500,
    'Life Skills': 1500,
    'Child Minding': 750,
    'Cooking': 750,
    'Garden Maintenance': 750,
  };

  const vatRate = 0.15; 

  const calculateDiscount = (courseCount) => {
    if (courseCount === 2) return 0.05;
    if (courseCount === 3) return 0.1;
    if (courseCount > 3) return 0.15;
    return 0;
  }

  useEffect(() => {
    switch (course) {
      case 'First Aid':
        setSelectedFirstAid(true);
        break;
      case 'Sewing':
        setSelectedSewing(true);
        break;
      case 'Landscaping':
        setSelectedLandscaping(true);
        break;
      case 'Life Skills':
        setSelectedLifeSkills(true);
        break;
      case 'Child Minding':
        setSelectedChildMinding(true);
        break;
      case 'Cooking':
        setSelectedCooking(true);
        break;
      case 'Garden Maintenance':
        setSelectedGardenMaintenance(true);
        break;
      default:
        break;
    }
  }, [course]);

  useFocusEffect(
        React.useCallback(() => {
        return () => {
            setSelectedFirstAid(false);
            setSelectedSewing(false);
            setSelectedLandscaping(false);
            setSelectedLifeSkills(false);
            setSelectedChildMinding(false);
            setSelectedCooking(false);
            setSelectedGardenMaintenance(false);
            setTotalAmount(null); 
        };
        }, []));

  const calculateFees = () => {
    let total = 0;

    if (selectedFirstAid) total += courseFees['First Aid'];
    if (selectedSewing) total += courseFees['Sewing'];
    if (selectedLandscaping) total += courseFees['Landscaping'];
    if (selectedLifeSkills) total += courseFees['Life Skills'];
    if (selectedChildMinding) total += courseFees['Child Minding'];
    if (selectedCooking) total += courseFees['Cooking'];
    if (selectedGardenMaintenance) total += courseFees['Garden Maintenance'];

    const courseCount = [selectedFirstAid, selectedSewing, selectedLandscaping, selectedLifeSkills, selectedChildMinding, selectedCooking, selectedGardenMaintenance].filter(Boolean).length;

    const vat = total * vatRate;
    total += vat;

    const discountRate = calculateDiscount(courseCount);
    if (discountRate > 0) {
      total -= total * discountRate;
    }

    setTotalAmount(total.toFixed(2));
  };

  const sendInfo = () => {
    alert('Enquiry sent!');
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedFirstAid} onValueChange={setSelectedFirstAid} />
        <Text style={styles.checkboxLabel}>First Aid - R1500</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedSewing} onValueChange={setSelectedSewing} />
        <Text style={styles.checkboxLabel}>Sewing - R1500</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedLandscaping} onValueChange={setSelectedLandscaping} />
        <Text style={styles.checkboxLabel}>Landscaping - R1500</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedLifeSkills} onValueChange={setSelectedLifeSkills} />
        <Text style={styles.checkboxLabel}>Life Skills - R1500</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedChildMinding} onValueChange={setSelectedChildMinding} />
        <Text style={styles.checkboxLabel}>Child Minding - R750</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedCooking} onValueChange={setSelectedCooking} />
        <Text style={styles.checkboxLabel}>Cooking - R750</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={selectedGardenMaintenance} onValueChange={setSelectedGardenMaintenance} />
        <Text style={styles.checkboxLabel}>Garden Maintenance - R750</Text>
      </View>

      <Button title="Calculate Fees" onPress={calculateFees} />

      {totalAmount != null && (
        <View style={{ marginTop: 20 }}>
          <Text>Total Amount: R{totalAmount}</Text>
        </View>
      )}
      <Button title="Send" onPress={sendInfo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CalculationScreen;

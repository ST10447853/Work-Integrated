import React, { useEffect } from 'react'; 
import { Animated, Image, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
  const opacity = new Animated.Value(1);
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainNav' }],
        })
      );
    });
  }, [navigation]);
  
  return (
    <Animated.View style={[styles.splashContainer, { opacity }]}>
      <Image 
        source={require('../Assets/ETN-logo.png')} 
        style={styles.splashLogo}
        onError={(e) => console.log(e.nativeEvent.error)}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  splashLogo: {
    width: 150,
    height: 150, 
  },
});
  
export default SplashScreen;

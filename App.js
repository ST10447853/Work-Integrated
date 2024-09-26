import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import Landscaping from './screens/Landscaping';
import LifeSkills from './screens/LifeSkills';
import ChildMinding from './screens/ChildMinding';
import Cooking from './screens/Cooking';
import GardenMaintenance from './screens/GardenMaintenance';
import CalculationScreen from './screens/CalculationScreen';
import FirstAid from './screens/FirstAid';
import Sewing from './screens/Sewing';
import SixweeksCourses from './screens/SixWeekCourses';
import SixmonthCourses from './screens/SixMonthCourses';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SixmonthCoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SixmonthCourses" component={SixmonthCourses}/>
      <Stack.Screen name="FirstAid" component={FirstAid}/>
      <Stack.Screen name="Sewing" component={Sewing}/>
      <Stack.Screen name="Landscaping" component={Landscaping}/>
      <Stack.Screen name="LifeSkills" component={LifeSkills}/>
    </Stack.Navigator>
  );
}

function SixweeksCoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SixweekCourses" component={SixweeksCourses}/>
      <Stack.Screen name="ChildMinding" component={ChildMinding}/>
      <Stack.Screen name="Cooking" component={Cooking}/>
      <Stack.Screen name="GardenMaintenance" component={GardenMaintenance}/>
    </Stack.Navigator>
  );
}

function InformationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalculationScreen" component={CalculationScreen} options={{ title: 'Calculation Screen' }} />
    </Stack.Navigator>
  );
}

function MainNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Long Courses') {
            iconName = focused ? 'book': 'book-outline';
          } else if (route.name === 'Short Courses') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Info') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff', 
        tabBarInactiveTintColor: '#adb5bd', 
        tabBarStyle: {
          backgroundColor: '#343a40', 
          borderTopWidth: 0,
          elevation: 5, 
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600', 
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Long Courses" component={SixmonthCoursesStack} />
      <Tab.Screen name="Short Courses" component={SixweeksCoursesStack}/>
      <Tab.Screen name="Info" component={InformationStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          <Stack.Screen name="MainNav" component={MainNav}/>
          <Stack.Screen name="ContactUs" component={ContactUs} options={{ title: 'Contact Us' }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'About Us' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

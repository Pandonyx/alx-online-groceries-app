import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Auth Screens
import SplashScreen from '../screens/Auth/SplashScreen';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
// import NumberInputScreen from '../screens/Auth/NumberInputScreen';
// import VerificationScreen from '../screens/Auth/VerificationScreen';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import SignUpScreen from '../screens/Auth/SignUpScreen';

// Import Location Screen
// import SelectLocationScreen from '../screens/Location/SelectLocationScreen';

// Import Main Navigator
// import MainNavigator from './MainNavigator';

export type AuthStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SignIn: undefined;
  NumberInput: undefined;
  Verification: undefined;
  Login: undefined;
  SignUp: undefined;
  SelectLocation: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      {/* <Stack.Screen name="NumberInput" component={NumberInputScreen} /> */}
      {/* <Stack.Screen name="Verification" component={VerificationScreen} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      {/* <Stack.Screen name="SelectLocation" component={SelectLocationScreen} /> */}
      {/* <Stack.Screen name="Main" component={MainNavigator} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;

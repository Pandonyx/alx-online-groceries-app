import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import { fonts, fontSizes } from '../../constants/fonts';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Onboarding'>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleGetStarted = () => {
    console.log('Get Started pressed - SignIn screen not ready yet');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/onboarding-img.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <Image 
            source={require('../../assets/icons/carrot.png')} 
            style={styles.carrotIcon}
            resizeMode="contain"
          />
          
          <Text style={styles.welcomeText}>
            Welcome{'\n'}to our store
          </Text>
          
          <Text style={styles.subtitleText}>
            Get your groceries in as fast as one hour
          </Text>
          
          <TouchableOpacity
            onPress={handleGetStarted}
            style={styles.getStartedButton}
          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.homeIndicatorContainer}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 48,
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  carrotIcon: {
    width: 56,
    height: 56,
    marginBottom: 32,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: fontSizes['5xl'],
    color: '#FFFFFF',
    lineHeight: 52,
    ...fonts.gilroySemiBold,
  },
  subtitleText: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: fontSizes.base,
    color: 'rgba(252, 252, 252, 0.7)',
    lineHeight: 22,
    ...fonts.gilroy,
  },
  getStartedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: '#53B175',
    borderRadius: 20,
    width: 350,
    height: 60,
  },
  buttonText: {
    fontSize: fontSizes.base,
    color: '#FFFFFF',
    ...fonts.gilroyBold,
  },
  homeIndicatorContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default OnboardingScreen;

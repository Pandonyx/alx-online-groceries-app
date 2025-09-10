import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import { fonts, fontSizes } from '../../constants/fonts';

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  // Country selection logic can be added here in the future

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign In');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/signin-img.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>
          
          <View style={styles.phoneInputContainer}>
            <View style={styles.phoneInputRow}>
              <TouchableOpacity style={styles.countryDropdown} activeOpacity={0.7}>
                <View style={styles.countryCodeContainer}>
                  <Image source={require('../../assets/icons/ma.png')} style={styles.flagImage} />
                  <Text style={styles.countryCode}>+212</Text>
                  <Icon name="chevron-down" size={16} color="#181725" style={styles.chevronIcon} />
                </View>
              </TouchableOpacity>
              {/* Future: Add dropdown for country selection here */}
            </View>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or connect with social media</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
            <Icon name="google" size={18} color="#FFFFFF" style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookSignIn}>
            <Icon name="facebook-f" size={18} color="#FFFFFF" style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
          
          <View style={styles.homeIndicatorContainer}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerImage: {
    width: '100%',
    height: '50%',
    maxHeight: 350,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: fontSizes['3xl'],
    color: '#181725',
    textAlign: 'left',
    marginBottom: 32,
    lineHeight: 36,
    ...fonts.gilroyBold,
  },
  phoneInputContainer: {
    marginBottom: 24,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  countryDropdown: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: 24,
    height: 18,
    marginRight: 8,
    borderRadius: 2,
  },
  countryCode: {
    fontSize: fontSizes.lg,
    color: '#181725',
    ...fonts.gilroyMedium,
    marginRight: 8,
  },
  chevronIcon: {
    marginLeft: 4,
    alignSelf: 'center',
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 140,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E2E2',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: fontSizes.sm,
    color: '#7C7C7C',
    ...fonts.gilroy,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5383EC',
    borderRadius: 20,
    paddingVertical: 16,
    marginBottom: 16,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A66AC',
    borderRadius: 20,
    paddingVertical: 16,
    marginBottom: 24,
  },
  socialIcon: {
    marginRight: 25,
  },
  socialButtonText: {
    fontSize: fontSizes.base,
    color: '#FFFFFF',
    ...fonts.gilroySemiBold,
  },
  homeIndicatorContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default SignInScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigation/AuthNavigator";
import { fonts, fontSizes } from "../../constants/fonts";

type SignInScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "SignIn"
>;

const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    console.log("Continue with phone:", phoneNumber);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook Sign In");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/signin-img.png")}
          style={styles.headerImage}
          resizeMode='contain'
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

          <View style={styles.phoneInputContainer}>
            <View style={styles.phoneInputRow}>
              <View style={styles.countryCodeContainer}>
                {/* Replace with <Image source={require('../../assets/icons/morocco-flag.png')} style={styles.flagImage} /> when uploaded */}
                <Text style={styles.flagEmoji}>🇲🇦</Text>
                <Text style={styles.countryCode}>+212</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder='Enter your phone number'
                placeholderTextColor='#7C7C7C'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
              />
            </View>
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or connect with social media</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}>
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={handleFacebookSignIn}>
            <Text style={styles.facebookIcon}>f</Text>
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.homeIndicatorContainer}>
          <View style={styles.homeIndicator} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerImage: {
    width: "100%",
    height: "50%",
    maxHeight: 350,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: fontSizes["3xl"],
    color: "#181725",
    textAlign: "left",
    marginBottom: 32,
    lineHeight: 36,
    ...fonts.gilroyBold,
  },
  phoneInputContainer: {
    marginBottom: 24,
  },
  phoneInputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  flagEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  flagImage: {
    width: 24,
    height: 18,
    marginRight: 8,
    borderRadius: 2,
  },
  countryCode: {
    fontSize: fontSizes.lg,
    color: "#181725",
    ...fonts.gilroyMedium,
  },
  phoneInput: {
    flex: 1,
    fontSize: fontSizes.lg,
    color: "#181725",
    ...fonts.gilroy,
  },
  inputUnderline: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 8,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: fontSizes.sm,
    color: "#7C7C7C",
    ...fonts.gilroy,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5383EC",
    borderRadius: 20,
    paddingVertical: 16,
    marginBottom: 16,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A66AC",
    borderRadius: 20,
    paddingVertical: 16,
  },
  googleIcon: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 12,
    color: "#ffffff",
    overflow: "hidden",
  },
  facebookIcon: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 12,
    color: "#ffffff",
    overflow: "hidden",
  },
  socialButtonText: {
    fontSize: fontSizes.base,
    color: "#FFFFFF",
    ...fonts.gilroyBold,
  },
  homeIndicatorContainer: {
    alignItems: "center",
    paddingBottom: 16,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

export default SignInScreen;

import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigation/AuthNavigator";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Splash"
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53B175",
  },
  logo: {
    width: 270,
    height: 70,
  },
});

export default SplashScreen;
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigation/AuthNavigator";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Splash"
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53B175",
  },
  logo: {
    width: 270,
    height: 70,
  },
});

export default SplashScreen;

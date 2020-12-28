import React from "react";
import {StyleSheet, ImageBackground, View, Image, Text} from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What you Don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='login' />
        <AppButton title='register' color='secondary' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
  tagLine: {
    fontWeight: "600",
    fontSize: 25,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

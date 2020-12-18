import React from "react";
import {StyleSheet, ImageBackground, View, Image, Text} from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText>Sell What you Don't need</AppText>
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
    marginBottom: 20,
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
});

export default WelcomeScreen;

import React from "react";
import {Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
        textContentType='emailAdress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

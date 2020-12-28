import React from "react";
import {View, StyleSheet, TextInput, Platform} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppTextInput({icon, ...otherProps}) {
  const [firstName, setFirstName] = React.useState("");
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name='email'
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder='firstName'
        onChangeText={(text) => setFirstName(text)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

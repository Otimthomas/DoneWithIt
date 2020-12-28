import React from "react";
import {View, StyleSheet, TextInput} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function AppTextInput({icon, ...otherProps}) {
  const [firstName, setFirstName] = React.useState("");
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
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
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
});

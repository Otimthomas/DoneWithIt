import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import defaultStyles from "../config/styles";

export default function AppButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: defaultStyles.colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

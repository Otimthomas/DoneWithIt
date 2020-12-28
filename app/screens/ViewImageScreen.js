import React from "react";
import {View, StyleSheet, Image} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name='close'
          size={35}
          color={defaultStyles.colors.white}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={35}
          color={defaultStyles.colors.white}
        />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 25,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 25,
  },
});

export default ViewImageScreen;

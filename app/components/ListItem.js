import React from "react";
import {View, StyleSheet, Image} from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

export default function ListItem({image, title, subTitle}) {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    paddingLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  subTitle: {
    color: colors.gray,
  },
});

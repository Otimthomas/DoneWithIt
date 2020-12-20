import React from "react";
import {View, StyleSheet, Image} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.cardDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  cardDetails: {
    paddingTop: 20,
    padding: 15,
  },
  title: {
    paddingBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

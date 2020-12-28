import React from "react";
import {View, StyleSheet, Image} from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import defaultStyles from "../config/styles";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title='Thomas Otim'
            subTitle='4 listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "500",
    paddingBottom: 10,
    fontSize: 24,
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginTop: 30,
  },
});

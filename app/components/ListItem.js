import React from "react";
import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import defaultStyles from "../config/styles";

import AppText from "./AppText";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.listItem}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: defaultStyles.colors.white,
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
    color: defaultStyles.colors.gray,
  },
});

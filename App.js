import {StatusBar} from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

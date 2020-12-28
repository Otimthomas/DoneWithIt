import React from "react";
import {StyleSheet} from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon='email' placeholder='First Name' />
    </Screen>
  );
}

const styles = StyleSheet.create({});

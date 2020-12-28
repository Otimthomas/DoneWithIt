import React from "react";
import {StyleSheet} from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
];

export default function App() {
  const [category, setCategory] = React.useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput icon='email' placeholder='First Name' />
    </Screen>
  );
}

const styles = StyleSheet.create({});

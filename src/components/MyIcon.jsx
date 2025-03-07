import { StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyIcon = ({ style, color, size, name }) => {
  return (
    <View style={[style, {paddingLeft:10}]}>
      <Ionicons name={name} size={20} color={color} />
    </View>
  );
};

export default MyIcon;

const styles = StyleSheet.create({});

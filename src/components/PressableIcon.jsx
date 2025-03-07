import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const PressableIcon = ({ style, onPress, color, size, name }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({});

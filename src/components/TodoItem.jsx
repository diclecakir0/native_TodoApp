import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const TodoItem = ({
  onChangeText,
  todo,
  deleteTodo,
  editIndex,
  editTodo,
  index,
  editText,
  cancelEdit,
  saveTodo


}) => {
  return (
    <View style={styles.container}>
      {editIndex === index ? (
        <TextInput style={[styles.text]} value={editText} onChangeText={onChangeText} placeholderTextColor={"white"} />
      ) : (
        <Text style={styles.text}>{todo}</Text>
      )}
      {editIndex === index ? (
             <View>
             <CustomButton
               onPress={cancelEdit}
               title={"Cancel"}
               bgColor={"#E52020"}
               butonIcon={"trash"}
               iconColor={"white"}
             />
             <CustomButton
               onPress={saveTodo}
               title={"Save"}
               bgColor={"#4B164C"}
               butonIcon={"create"}
               iconColor={"white"}
             />
           </View>
      ): (
             <View>
             <CustomButton
               onPress={deleteTodo}
               title={"Delete"}
               bgColor={"#E52020"}
               butonIcon={"trash"}
               iconColor={"white"}
             />
             <CustomButton
               onPress={editTodo}
               title={"Update"}
               bgColor={"#003092"}
               butonIcon={"create"}
               iconColor={"white"}
             />
           </View>
      )}
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    width: "100%",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 25,
    color: "black",
    fontFamily: "MysteryQuest",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

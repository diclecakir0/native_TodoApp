import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { useFonts, MysteryQuest_400Regular } from "@expo-google-fonts/mystery-quest";
import AppLoading from "expo-app-loading";
import HeaderText from '../components/HeaderText'
import ContentText from '../components/ContentText'
import TodoList from '../components/TodoList'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'


const HomeScreens = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');


  // Todo Adding Function
  const addTodo = () => {
    if(todoText) {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  }

  // Todo Delete Function
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_,todoIndex)=>todoIndex !== index);
    setTodos(newTodos);
  }

  // Todo Update Function

  const updateTodo=(index, newText)=>{
    const updatedTodos=[...todos]
    updatedTodos[index]=newText
    setTodos(updatedTodos)
  }


  let [fontsLoaded] = useFonts({
    MysteryQuest: MysteryQuest_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View style={styles.container}>
      <HeaderText title={"React Native TodoApp"} />
      <ContentText content={"Tasks to List"} />

    <View style={{backgroundColor:'#872341', padding:15}}>
    <View style={styles.view}> 
      <TextInput value={todoText} onChangeText={(text) => setTodoText(text)} placeholder="Enter Task" placeholderTextColor={'gray'} style={styles.input} />
      <CustomButton bgColor={'#2D336B'} title={'Add'}  onPress={()=>addTodo()}/>
    </View>

    <View style={styles.view}>
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </View>
    </View>
      

    
    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({

  fontStyle:{
    fontSize: 20,
    color: 'red',
    fontFamily: "MysteryQuest"
  },
  container: {
    flex: 1,
    backgroundColor: "fff", // To reset the background color
  },
  input:{
    backgroundColor:'#FFE2E2',
     padding:10,
      fontSize:30,
      borderRadius: 10,
      marginHorizontal: 10,
      width: '70%',
      fontFamily: 'MysteryQuest',
  },
  view:{
    backgroundColor:'#A888B5',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})



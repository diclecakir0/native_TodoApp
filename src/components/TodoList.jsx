import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import TodoItem from './TodoItem'
import LottieView from 'lottie-react-native'

const TodoList = ({todos, onDelete, onUpdate}) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  //Starting the update process
  const startEditing=(index)=>{
    setEditIndex(index);
    setEditText(todos[index]);
  }

  //Finishing the update process
  const cancelEditing=()=>{
    setEditIndex(null);
    setEditText('');
  }

  // todo update
  const saveTodo=(index)=>{
    onUpdate(index, editText)
    setEditIndex(null);
    setEditText('');
  }
   
  return (
    <View>
      <FlatList

       ListEmptyComponent={()=>{
        return(
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <LottieView style={{width:200, height:200}} source={require('../../assets/animations/list.json')} autoPlay loop />
          </View>
        )
       }} 

       data={todos}
      renderItem={({item, index})=>{
        return(
        <TodoItem 
          index={index}
          todo={item} 
          editIndex={editIndex}
          editText={editText}
          onChangeText={(text) => setEditText(text)}
          saveTodo={()=>saveTodo(index)}
          cancelEdit={() => cancelEditing()}
          editTodo={() => startEditing(index)}

        deleteTodo={() => onDelete(index)} />
        )
      }}
      />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})
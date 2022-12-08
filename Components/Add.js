import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function Add({onAdd}) {

    const [newTextInput,setNewTextInput] = useState('')
    const onChangeInput = (newTodo) => {
        setNewTextInput(newTodo)
    }
    const addTodoHandler = () =>{
        onAdd(newTextInput)
        setNewTextInput('')
    }

    return(

    <View style={styles.addView}>
      <TextInput
        style={styles.addTextInput}
        placeholder="Write a task"
        onChangeText={onChangeInput}
        value={newTextInput}
      ></TextInput>

      <TouchableOpacity style={styles.addButton} onPress={addTodoHandler}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </View>

    )
}
const styles = StyleSheet.create({
    addView: {
        flexDirection:'row',
        marginBottom: 30,
        alignSelf:'center',
    },
    addTextInput:{
        width:"70%",
        height: 50,
        backgroundColor:"white",
        fontSize:20,
        padding:10,
        borderWidth:1,
        borderRadius: 10,
        borderColor:'#ADADAD',
        marginRight: 20,
      },
    addButton: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius: 40,
      borderColor: '#ADADAD',
      backgroundColor: 'white',
      alignItems:'center',
    },
    plus: {
      fontSize: 50,
      fontWeight: '100',
      color:'#ADADAD',
      marginTop:-12
    },
  });  
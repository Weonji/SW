import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Add from './Components/Add'
import List from './Components/List';

export default function App() {
  
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
      setTodos([...todos,{id: Math.random().toString(),textValue: text, checked: false, change:true}])
  }
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const onCheck = id => e=> {
    setTodos(
      todos.map(todo=>
        todo.id === id ? {...todo, checked: ! todo.checked} : todo)
    )
  }

  const changeStyle = id => e=> {
    setTodos(
      todos.map(todo=>
        todo.id === id ? {...todo, change: ! todo.change} : todo)
    )
  }

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const newTodoList = todos.filter(todo => todo.checked === false)
    const length = newTodoList.length;
    setCounter(length)
  }, [todos])



  const [isShown, setIsShown] = useState(false);
  const toggleSwitch = () => setIsShown(previousState => !previousState);

  return (

    <View style={[styles.containerColor, isShown ? styles.containerDark : styles.container]}>
      <StatusBar style="auto" />
      <Header 
        counter={counter}
        isShown={isShown} 
        toggleSwitch={toggleSwitch} 
      />
      <ScrollView>
        <List 
          todos={todos} 
          onRemove={onRemove} 
          onCheck={onCheck} 
          changeStyle={changeStyle}
        />
      </ScrollView>
      <Add onAdd={addTodo} />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F5F5F5',
    flex:1,
  },
  containerDark: {
    backgroundColor:'black',
    flex:1,
  }
});  
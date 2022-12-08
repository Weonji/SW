import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Switch  } from 'react-native';


export default function Header({counter, isShown, toggleSwitch}) {
    const [currentDate, setCurrentDate] = useState('')
    useEffect(() => {
      var date = new Date().getDate(); 
      var month = new Date().getMonth() + 1; 
      var year = new Date().getFullYear(); 
      setCurrentDate(
        year + '/' + month + '/' + date 
      );
    }, []);
    
    return(
      
      <View>
        <View style={styles.mainView}>
          <Text style={[styles.titleColor, isShown ? styles.titleDark : styles.title]}>TODO LIST</Text>
          <Switch 
            style={styles.switch}
            trackColor={{ true: "#767577", false: "#81b0ff" }}
            thumbColor={isShown ? "#f4f3f4" : "#f5dd4b"}
            onValueChange={toggleSwitch}
            value={isShown}
          ></Switch>
        </View>
        <View style={styles.subView}>
          <Text style={[styles.counterColor, isShown ? styles.counterDark : styles.counter]}>
            남은 할 일: {counter} 개
          </Text>
          <Text style={[styles.dateColor, isShown ? styles.dateDark : styles.date]}>{currentDate}</Text>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
    mainView: {
        marginBottom: 20,
        marginTop: 60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'  
    },
    title: {
        fontSize: 30,
        marginLeft:40,
        fontWeight:'500'
    },
    titleDark: {
      fontSize: 30,
      marginLeft:40,
      fontWeight:'500',
      color:'white'
    },
    switch: {
      marginRight:40,
      transform:[{ scaleX: 1.4 }, { scaleY: 1.4 }],
    },
    subView: {
      marginBottom: 20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'  
    },
    date: {
      fontSize: 20,
      marginRight:40,
      fontWeight:'500',
    },
    dateDark: {
      fontSize: 20,
      marginRight:40,
      fontWeight:'500',
      color:'white'
    },
    counter: {
      fontSize: 15,
      marginLeft:40,
      fontWeight:'500',
    },
    counterDark: {
      fontSize: 15,
      marginLeft:40,
      fontWeight:'500',
      color:'white'
    }
})
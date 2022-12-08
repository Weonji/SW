import {StyleSheet, ScrollView } from 'react-native';
import Item from './Item';

export default function List({todos, onRemove, onCheck, changeStyle}) {

    return  (
        
        <ScrollView style={styles.container}>
            {todos.map(todo => (
                <Item Key={todo.id}{...todo} onRemove={onRemove} onCheck={onCheck} changeStyle={changeStyle} />
            ))}
            
        </ScrollView>
    )
} 
const styles= StyleSheet.create({
    container: {
        alignSelf:'center',
        width:'100%'
    }
})
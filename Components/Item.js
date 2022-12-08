import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Nocheck from '../assets/nocheck.png'
import Checked from '../assets/checked.png'
import Delete from '../assets/delete.png'
import Star from '../assets/star.png'
import YellowStar from '../assets/yellowStar.png'

export default function Item({textValue, id, checked, onRemove, onCheck, changeStyle, change}) {
 
    return (        
        
        <View style={[styles.view, change ? styles.container : styles.containerPress]}>

            <View style={{flexDirection:'row', alignItems:'center'}}>

                <TouchableOpacity onPress={onCheck(id)}>
                    {checked ? (  
                        <Image style={styles.leftIcon} source={Checked}/>) : (<Image style={styles.leftIcon} source={Nocheck}/>)}
                </TouchableOpacity>

                <Text style={[styles.text, checked ? styles.checkedText : styles.noCheckText]}>
                    {textValue}
                </Text>
                
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>

                <TouchableOpacity onPress={changeStyle(id)}>
                    {change ? ( 
                        <Image style={styles.rigthIcon} source={Star}/>) : (<Image style={styles.rigthIcon} source={YellowStar}/>)}
                </TouchableOpacity>
                
                <TouchableOpacity onPress={onRemove(id)}>
                    <Image style={styles.rigthIcon} source={Delete}/>
                </TouchableOpacity>

            </View>

        </View>
    )
} 
const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop:5,
        backgroundColor:'white',
        elevation: 4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    containerPress: {
        flexDirection: 'row',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop:5,
        backgroundColor:'lightsteelblue',
        elevation: 4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftIcon: {
        width:30,
        height:30,
        marginLeft:15,
    },
    noCheckText: {
        color: 'black',
        padding:15,
        multiline:true,
        width:215,
        fontSize:20
    },
    checkedText: {
        color: 'gray',
        padding:15,
        multiline:true,
        width:215,
        fontSize:20,
        textDecorationLine: 'line-through',
    },
    rigthIcon:{
        width:30,
        height:30,
        marginRight:15,
    },
})
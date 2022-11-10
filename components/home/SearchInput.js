import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../constants/colors';


function SearchInput() {
  return (
    <View style={{marginTop:30,flexDirection:'row'}}>
        <View style={styles.searchInputContainer}>
        <FontAwesome5 name='search' size={20} style={{marginLeft:20,color:COLORS.grey}}/>
        <TextInput placeholder='Search'style={styles.input}/>       
        </View>       
        <View style={styles.sortBtn}> 
          <FontAwesome5 name='filter' size={18} style={{color:COLORS.white}}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({   
    searchInputContainer:{
        justifyContent:'space-between',
        flex:1,      
        backgroundColor:COLORS.light,
        borderRadius:10,
        alignItems:'center',
        height:50,
        flexDirection:'row'
    },
    input:{
        fontSize:15,      
        color:COLORS.dark,
        flex:1,
        color:COLORS.grey,   
        paddingHorizontal:10        
    },
    sortBtn:{
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor:COLORS.green,    
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    }
    });

export default SearchInput

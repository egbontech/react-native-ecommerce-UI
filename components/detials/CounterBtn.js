import React, { useState } from 'react'
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/colors';



function CounterBtn() {
    const [quantity,setQuantity] = useState(1);

    function increaseQuantity(){
        if(quantity < 5)
        {
            setQuantity(quantity + 1)
        }
        return false       
    }
    function decreaseQuantity(){
        if(quantity > 1)
        {
            setQuantity(quantity - 1)
        }
        return false        
    }
  return (
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <TouchableOpacity onPress={decreaseQuantity}>
    <View style={styles.Btn}>
        <Text style={styles.btnText} >-</Text>
    </View>
    </TouchableOpacity>  
    <Text style={{fontSize:20,fontWeight:'600',marginHorizontal:10}}>{quantity}</Text>
    <TouchableOpacity onPress={increaseQuantity}>
    <View style={styles.Btn}>
        <Text style={styles.btnText}  >+</Text>
    </View>
    </TouchableOpacity>
                             
</View>
  )
}
const styles = StyleSheet.create({  
    Btn:{
        borderColor:COLORS.grey,
        borderWidth:1,
        borderRadius:5,
        height:40,
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{       
        fontSize:22,     
    } 
    });

export default CounterBtn

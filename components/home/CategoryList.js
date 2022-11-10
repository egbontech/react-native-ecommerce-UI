import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors';
import Products from '../../constants/products';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const List = ['Popular','Recommeded','New'];

const width = Dimensions.get('screen').width/2 -30


function CategoryList({navigation}) {

    const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0);
    

  return (
    <>
      <View style={styles.categoryContainer}>
    {List.map((item,index) => (
        <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
         <Text  style={[{fontWeight:'500',fontSize:15},selectedCategoryIndex == index && styles.active]}>{item}</Text>
        </Pressable>       
    ))}   
   </View> 
     <FlatList
      data={Products}
      numColumns={2} 
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item}) => (  
        <View style={styles.card}>
            <Pressable onPress={() => navigation.navigate('Detials',item)}>
            <View style={{alignItems:'flex-end'}}>
                <MaterialIcons name='favorite'size={18} color={COLORS.red}/>
            </View>    
            <View style={{height:100,alignItems:'center'}}>
                <Image  source={require('../../assets/images/image.png')} style={{height:200,width:100,flex:1,resizeMode:'contain'}}/>
            </View>       
            <Text style={{fontWeight:'500',fontSize:17,marginTop:10}}>{item.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
                <Text style={{fontSize:17,fontWeight:'600'}}>${item.price}</Text>
                <View style={{height:25,width:25,backgroundColor:COLORS.green,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{fontWeight:'600',color:COLORS.white}}>+</Text>
                </View>
            </View>                
            </Pressable>           
        </View>   
     )}/>
        
 
    </>
 
  )
}

const styles = StyleSheet.create({
   categoryContainer:{
    flexDirection:'row',
    marginBottom:20,
    marginTop:30,
    justifyContent:'space-around'    
   },
   active:{
    color:COLORS.green,  
    paddingBottom:5
   },
   card:{
    height:240,
    backgroundColor:COLORS.light,
    width,
    marginHorizontal:2,
    borderRadius:2,
    marginBottom:20,
    padding:15,
    borderRadius:10
    
   },
   image:{
    height:200,
    width:'100%'
   }
});

export default CategoryList

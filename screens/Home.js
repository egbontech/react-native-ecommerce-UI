import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from './../components/home/SearchInput';
import CategoryList from './../components/home/CategoryList';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{paddingHorizontal:20,backgroundColor:COLORS.white,height:'100%'}}>
        <View style={styles.header}>
            <View>
                <Text style={{fontSize:20,fontWeight:'700'}}>Welcome To</Text>                
                <Text style={{fontSize:28,fontWeight:'bold',color:COLORS.green}}>Eazy Electronics</Text>                
            </View>
            <FontAwesome name='shopping-cart' size={28}/>
        </View>          
        <SearchInput/>      
        <CategoryList navigation={navigation}/> 
       <StatusBar style='dark'/>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}
});


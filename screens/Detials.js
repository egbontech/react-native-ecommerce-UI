import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StackActions } from '@react-navigation/native';
import CounterBtn from '../components/detials/CounterBtn';
import { StatusBar } from 'expo-status-bar';

function Detials({ navigation, route }) {

    const item = route.params

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, height: '100%' }}>
            <StatusBar style='dark'/>
           
            <View style={styles.header}>
                <AntDesign name='arrowleft' size={25} onPress={() => navigation.dispatch(StackActions.pop())} />
                <FontAwesome5 name='shopping-cart' size={25} />
            </View>
            <ScrollView style={{flex:1}}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/image.png')} style={{ resizeMode: 'contain', flex: 1, height: '100%', width: '100%' }} />
            </View>
            <View style={styles.detialsContainer}>
                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end', alignItems: 'flex-end' }}>
                    <View style={styles.line}></View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Best choice</Text>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{item.title}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 15, marginLeft: 15 }}>${item.price}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Description</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: '600', marginTop: 15 }}>
                        {item.detials}
                        </Text>
                    <View style={{ marginTop:20,flexDirection:'row',justifyContent:'space-between',marginBottom:15 }}> 
                    <CounterBtn/>   
                    <Pressable   onPress={() => alert(`${item.title} added to basket`)}>
                    <View style={{height:50,width:150,backgroundColor:COLORS.green,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{paddingHorizontal:10,color:COLORS.white,fontWeight:'500'}}>Add To Basket</Text>
                    </View>
                    </Pressable>                    
                    </View>
                </View>
            </View>
            </ScrollView>
            
          
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    imageContainer: {      
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height:300
    },
    detialsContainer: {      
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        marginTop: 30,
        paddingTop: 30,
        borderRadius: 20
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },    
});

export default Detials

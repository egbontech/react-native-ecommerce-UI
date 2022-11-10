import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import Detials from '../screens/Detials'

function StackNavigation() {
    
    const Stack = createStackNavigator();

    return (   
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Home}  />           
          <Stack.Screen name='Detials' component={Detials} />           
        </Stack.Navigator>
      </NavigationContainer>       
      )
}

export default StackNavigation
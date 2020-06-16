import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from './src/pages/Home'
import StatusGlobal from './src/pages/StatusGlobal'
import StatusCountry from './src/pages/StatusCountry'
import AllCountries from './src/pages/AllCountries'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#f0f0f5'}}}>
        
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="AllCountries" component={AllCountries} />
        <AppStack.Screen name="GlobalStatus" component={StatusGlobal} />
        <AppStack.Screen name="StatusCountry" component={StatusCountry} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}
export default Routes
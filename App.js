import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from './app/navigations/AppNavigator'
import NavigationTheme from './app/navigations/NavigationTheme'

function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
    )
}
export default App
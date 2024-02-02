import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import getRouteName, { RouteConstants } from './RouteConstants'
import styles from './styles'
import { NavigationProps } from './types'

const Stack = createStackNavigator()

const NavigationStack = ({ screenProps, screenName }: NavigationProps) => {
  return (
    <GestureHandlerRootView style={styles.parent}>
      <ReactApp screenProps={screenProps} screenName={screenName} />
    </GestureHandlerRootView>
  )
}

const ReactApp = ({ screenProps, screenName }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={getRouteName(screenName)}
        screenOptions={{ headerShown: false, presentation: 'modal' }}>
        <Stack.Screen
          name={RouteConstants.Home.screenName}
          component={RouteConstants.Home.screen}
          initialParams={{ screenProps }}
        />
        <Stack.Screen
          name={RouteConstants.Splash.screenName}
          component={RouteConstants.Splash.screen}
          initialParams={{ screenProps }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack

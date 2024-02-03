import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import getRouteName, { RouteConstants } from './RouteConstants'
import styles from './styles'
import { NavigationProps } from './types'

const Stack = createStackNavigator()

/**
 *  ReactApp() function wraps your Navigation stack.
 */
const ReactApp = ({ screenProps, screenName }: NavigationProps) => {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={styles.parent}>
        <NavigationStack screenProps={screenProps} screenName={screenName} />
      </GestureHandlerRootView>
    </ErrorBoundary>
  )
}

/**
 *  NavigationStack() function provides capability to navigate between screens.
 */
const NavigationStack = ({ screenProps, screenName }: any) => {
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

export default ReactApp

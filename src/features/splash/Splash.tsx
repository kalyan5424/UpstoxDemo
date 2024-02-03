import { Text, View } from 'react-native'
import { RouteConstants } from 'routes/RouteConstants'
import styles from './styles'

/**
 *  Splash() component is the splash screen which is a welcome screen to user and is visible for 2 seconds .
 */
const Splash = ({ navigation }) => {
  /**
   *  setTimeout() function is a timer function to navigate to landing screen after specified duration.
   * Current timeout is set to 2 seconds.
   */
  setTimeout(() => {
    navigation?.replace(RouteConstants.Home.screenName)
  }, 2000)
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.appNameFontStyle}>Upstox</Text>
    </View>
  )
}

export default Splash

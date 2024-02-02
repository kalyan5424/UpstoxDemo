import { Text, View } from 'react-native'
import { RouteConstants } from 'routes/RouteConstants'
import styles from './styles'

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation?.navigate(RouteConstants.Home.screenName)
  }, 1000)
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.appNameFontStyle}>Upstox</Text>
    </View>
  )
}

export default Splash

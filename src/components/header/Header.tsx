import { Text, View } from 'react-native'
import Labels from 'utils/Labels'
import styles from './styles'
import { HeaderProps } from './types'

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerFontStyle}>{props?.title ?? Labels.HOME}</Text>
    </View>
  )
}

export default Header

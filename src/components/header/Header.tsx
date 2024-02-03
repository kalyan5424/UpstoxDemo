import { Text, View } from 'react-native'
import Labels from 'utils/labels'
import styles from './styles'
import { HeaderProps } from './types'

/**
 *  Header component used to render page/screen title
 */
const Header = (props: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerFontStyle}>{props?.title ?? Labels.HOME}</Text>
    </View>
  )
}

export default Header

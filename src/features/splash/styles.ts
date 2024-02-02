import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { FONT_SIZE_20 } from 'theme/typography'

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE,
  },
  appNameFontStyle: {
    fontSize: FONT_SIZE_20,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
})

export default styles

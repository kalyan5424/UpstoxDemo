import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { FONT_SIZE_16, SPACING_16 } from 'theme/typography'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.PURPLE,
    padding: SPACING_16,
  },
  headerFontStyle: {
    color: Colors.WHITE,
    fontSize: FONT_SIZE_16,
  },
})

export default styles

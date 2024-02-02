import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { FONT_SIZE_14, SPACING_16, SPACING_18, SPACING_2, SPACING_4 } from 'theme/typography'

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: SPACING_2,
    marginTop: SPACING_16,
  },
  pnlContainer: {
    flexDirection: 'row',
    padding: SPACING_2,
    marginVertical: SPACING_18 + SPACING_18,
  },
  symbolTextStyle: {
    fontSize: FONT_SIZE_14,
    color: Colors.BLACK,
    flex: 1,
    fontWeight: 'bold',
  },
  ltpTextStyle: {
    fontSize: FONT_SIZE_14,
    color: Colors.BLACK,
    marginRight: SPACING_4,
  },
})

export default styles

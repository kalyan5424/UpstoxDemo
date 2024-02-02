import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { FONT_SIZE_12, SPACING_2, SPACING_4 } from 'theme/typography'

const styles = StyleSheet.create({
  rowOneContainer: {
    flexDirection: 'row',
    padding: SPACING_2,
  },
  symbolTextStyle: {
    fontSize: FONT_SIZE_12,
    color: Colors.BLACK,
    flex: 1,
    fontWeight: 'bold',
  },
  ltpTextStyle: {
    fontSize: FONT_SIZE_12,
    color: Colors.BLACK,
    marginRight: SPACING_4,
  },
  ltpAmtTextStyle: {
    fontSize: FONT_SIZE_12,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  qtyTextStyle: {
    fontSize: FONT_SIZE_12,
    color: Colors.BLACK,
    marginRight: SPACING_4,
    flex: 1,
  },
})

export default styles

import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import {
  FONT_SIZE_14,
  SPACING_10,
  SPACING_16,
  SPACING_18,
  SPACING_2,
  SPACING_25,
  SPACING_4,
  SPACING_8,
} from 'theme/typography'

const styles = StyleSheet.create({
  bottomViewContainer: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.COLOR_E1E1E1,
    borderWidth: 1,
    borderTopLeftRadius: SPACING_25,
    borderTopRightRadius: SPACING_25,
    shadowOpacity: Platform.OS == 'ios' ? 0 : SPACING_18,
    shadowRadius: Platform.OS == 'ios' ? 0 : SPACING_4,
    elevation: Platform.OS == 'ios' ? 0 : SPACING_4,
    paddingHorizontal: SPACING_16,
    paddingVertical: SPACING_4,
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: SPACING_8,
  },
  arrowStyle: {
    padding: SPACING_10,
  },
  downArrowStyle: {
    padding: SPACING_10,
    transform: [{ rotate: '180deg' }],
  },
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

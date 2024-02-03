import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { SPACING_10, SPACING_12, SPACING_14, SPACING_2, SPACING_32 } from 'theme/typography'

const styles = StyleSheet.create({
  stocksViewContainer: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    padding: SPACING_14,
  },
  textStyle: {
    color: Colors.BLACK,
  },
  reloadButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING_12,
    paddingHorizontal: SPACING_32,
    borderRadius: SPACING_10,
    elevation: 3,
    backgroundColor: Colors.PURPLE,
    marginTop: SPACING_10,
  },
  reloadTextStyle: { color: Colors.WHITE },
  divider: {
    backgroundColor: Colors.BORDER_GREY,
    height: 1,
    marginVertical: SPACING_2,
  },
})

export default styles

import { StyleSheet } from 'react-native'
import { Colors } from 'theme/theme'
import { SPACING_14, SPACING_2 } from 'theme/typography'

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
  divider: {
    backgroundColor: Colors.BORDER_GREY,
    height: 1,
    marginVertical: SPACING_2,
  },
})

export default styles

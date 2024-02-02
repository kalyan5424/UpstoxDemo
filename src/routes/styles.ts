import { StyleSheet } from 'react-native'
import { Colors, Typography } from 'theme/theme'

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.LIGHT_GREY,
    fontWeight: 'bold',
  },
})

export default styles

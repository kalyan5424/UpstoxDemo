import { Text, View } from 'react-native'
import styles from './styles'
import { BottomViewItemProps } from './types'

const BottomViewItem = ({ title, value, isLastItem = false }: BottomViewItemProps) => {
  return (
    <View style={isLastItem ? styles.pnlContainer : styles.rowContainer}>
      <Text style={styles.symbolTextStyle}>{title}</Text>
      <Text style={styles.ltpTextStyle}>{value}</Text>
    </View>
  )
}

export default BottomViewItem

import { Text, TouchableOpacity, View } from 'react-native'
import { calProfitLoss } from 'utils/mathUtils'
import styles from './styles'
import { ListItemProps } from './types'

/**
 *  ListItem component used to render each row item for list of stocks
 */
const ListItem = ({ item, index, onPress }: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rowOneContainer}>
        <Text style={styles.symbolTextStyle}>{item?.symbol?.toUpperCase() ?? ''}</Text>
        <View style={styles.rowOneContainer}>
          <Text style={styles.ltpTextStyle}>LTP:</Text>
          <Text style={styles.ltpAmtTextStyle}>{`₹ ${item?.ltp?.toFixed(2)}`}</Text>
        </View>
      </View>
      <View style={styles.rowOneContainer}>
        <Text style={styles.qtyTextStyle}>{`Qty. ${item?.quantity}`}</Text>
        <View style={styles.rowOneContainer}>
          <Text style={styles.ltpTextStyle}>P/L:</Text>
          <Text style={styles.ltpAmtTextStyle}>{calProfitLoss(item?.ltp, item?.avgPrice, item?.quantity)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

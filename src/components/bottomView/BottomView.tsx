import { UpArrow } from 'assets/images'
import BottomViewItem from 'components/bottomViewItem/BottomViewItem'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import Labels from 'utils/Labels'
import { isEmptyObject } from 'utils/Utils'
import { calTotalCurrentValue, calTotalInvestmentValue, todaysProfitLoss, totalProfitLoss } from 'utils/mathUtils'
import styles from './styles'

const BottomView = () => {
  const { data } = useSelector((state) => state?.stocks)
  const [expanded, setExpanded] = useState(false)

  const onArrowPress = () => {
    setExpanded(!expanded)
  }

  if (isEmptyObject(data)) {
    return <></>
  }

  return (
    <View style={styles.bottomViewContainer}>
      <TouchableOpacity onPress={onArrowPress} style={styles.arrowContainer}>
        {!expanded ? <UpArrow style={styles.arrowStyle} /> : <UpArrow style={styles.downArrowStyle} />}
      </TouchableOpacity>
      {expanded && (
        <View>
          <BottomViewItem title={Labels.CURRENT_VALUE} value={`₹ ${calTotalCurrentValue(data?.userHolding ?? [])}`} />
          <BottomViewItem title={Labels.TOTAL_INVEST} value={`₹ ${calTotalInvestmentValue(data?.userHolding ?? [])}`} />
          <BottomViewItem title={Labels.TODAYS_PNL} value={`₹ ${todaysProfitLoss(data?.userHolding ?? [])}`} />
        </View>
      )}

      <BottomViewItem
        title={Labels.PROFIT_LOSS}
        value={`₹ ${totalProfitLoss(data?.userHolding ?? [])}`}
        isLastItem={true}
      />
    </View>
  )
}

export default BottomView

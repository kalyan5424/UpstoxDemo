import { UpArrow } from 'assets/images'
import BottomViewItem from 'components/bottomViewItem/BottomViewItem'
import { useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Labels from 'utils/labels'
import { calTodaysProfitLoss, calTotalCurrentValue, calTotalInvestmentValue, calTotalProfitLoss } from 'utils/mathUtils'
import styles from './styles'

/**
 * BottomView component to see highlights of current portfolio
 */
const BottomView = () => {
  const { data } = useAppSelector((state) => state?.stocks)
  const [expanded, setExpanded] = useState(false)

  /**
   *  onArrowPress() used to expand/collapse BottomView
   */
  const onArrowPress = () => {
    setExpanded(!expanded)
  }

  if (data?.userHolding?.length === 0) {
    return <></>
  }

  return (
    <View style={styles.bottomViewContainer}>
      <TouchableOpacity onPress={onArrowPress} style={styles.arrowContainer}>
        {!expanded ? <UpArrow testID='UpArrowIcon' style={styles.arrowStyle} /> : <UpArrow testID='DownArrowIcon' style={styles.downArrowStyle} />}
      </TouchableOpacity>
      {expanded && (
        <View>
          <BottomViewItem title={Labels.CURRENT_VALUE} value={`₹ ${calTotalCurrentValue(data?.userHolding ?? [])}`} />
          <BottomViewItem title={Labels.TOTAL_INVEST} value={`₹ ${calTotalInvestmentValue(data?.userHolding ?? [])}`} />
          <BottomViewItem title={Labels.TODAYS_PNL} value={`₹ ${calTodaysProfitLoss(data?.userHolding ?? [])}`} />
        </View>
      )}

      <BottomViewItem
        title={Labels.PROFIT_LOSS}
        value={`₹ ${calTotalProfitLoss(data?.userHolding ?? [])}`}
        isLastItem={true}
      />
    </View>
  )
}

export default BottomView

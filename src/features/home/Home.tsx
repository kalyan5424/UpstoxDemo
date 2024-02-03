import BottomView from 'components/bottomView/BottomView'
import Header from 'components/header/Header'
import StocksView from 'components/stocksView/StocksView'
import { View } from 'react-native'
import { RouteConstants } from 'routes/RouteConstants'
import styles from './styles'

/**
 *  Home() component is the landing component the encloses Header, StocksView and BottomView components.
 *  Home components is the mail container.
 */
const Home = () => {
  return (
    <View style={styles.parentContainer}>
      <Header title={RouteConstants.Home.screenName} />
      <StocksView />
      <BottomView />
    </View>
  )
}

export default Home

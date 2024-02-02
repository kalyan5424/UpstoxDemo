import ListItem from 'components/listItem/ListItem'
import { fetchStocks } from 'features/home/saga/fetchStocksSlice'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from 'theme/theme'
import Labels from 'utils/Labels'
import { STATUS } from 'utils/enum'
import styles from './styles'

const StocksView = () => {
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)

  const { data, status } = useSelector((state) => state?.stocks)

  const fetchAllStocks = async () => {
    dispatch(fetchStocks())
  }
  useEffect(() => {
    setRefreshing(true)
    fetchAllStocks()
    setRefreshing(false)
  }, [])

  const onItemPress = () => {}

  const renderListItem = ({ item, index }) => {
    return <ListItem item={item} index={index} onPress={onItemPress} />
  }
  return (
    <SafeAreaView style={styles.stocksViewContainer}>
      <View style={styles.stocksViewContainer}>
        {status === STATUS.LOADING && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color={Colors.PURPLE} />
            <Text style={styles.textStyle}> {Labels.LOADING}</Text>
          </View>
        )}
        {status === STATUS.ERROR && (
          <View style={styles.loaderContainer}>
            <Text style={styles.textStyle}>{Labels.ERROR_PROCESSING}</Text>
          </View>
        )}
        {status === STATUS.SUCCESS && (
          <FlatList
            data={data?.userHolding ?? []}
            renderItem={renderListItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}-${item?.symbol}`}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            ListEmptyComponent={
              <View style={styles.loaderContainer}>
                <Text style={styles.textStyle}>{Labels.NO_RESULTS}</Text>
              </View>
            }
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchAllStocks} />}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default StocksView

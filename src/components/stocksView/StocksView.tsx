import { AxiosError } from 'axios'
import ListItem from 'components/listItem/ListItem'
import { fetchStocks } from 'features/home/saga/fetchStocksSlice'
import { useAppSelector } from 'hooks/hooks'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, RefreshControl, SafeAreaView, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Colors } from 'theme/theme'
import { STATUS } from 'utils/enum'
import Labels from 'utils/labels'
import { isNetworkError } from 'utils/utils'
import styles from './styles'

/**
 *  StocksView component used to render list of all stocks of user
 */
const StocksView = () => {
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)

  const { data, status, error } = useAppSelector((state) => state?.stocks)

  /**
   *  fetchAllStocks() function to retrieve all stocks held by user
   */
  const fetchAllStocks = async () => {
    dispatch(fetchStocks())
  }
  useEffect(() => {
    setRefreshing(true)
    fetchAllStocks()
    setRefreshing(false)
  }, [])

  /**
   *  onItemPress() function can be used to perform any action onclick of item
   *  Since no action is defined, hence its empty
   */
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
            <Text style={styles.textStyle}>
              {isNetworkError(error as AxiosError) ? Labels.INTERNET_ERROR : Labels.ERROR_PROCESSING}
            </Text>
            <Pressable style={styles.reloadButtonStyle} onPress={fetchAllStocks}>
              <Text style={styles.reloadTextStyle}>{Labels.RELOAD}</Text>
            </Pressable>
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

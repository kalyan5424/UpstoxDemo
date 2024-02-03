import { UserHolding } from 'features/home/services/types'

/**
 *  calCurrentValue() takes ltp and quantity as args and calculates and returns current value
 *  @ltp is of type number
 *  @quantity is of type number
 */
export const calCurrentValue = (ltp: number, quantity: number): number => {
  return ltp * quantity
}

/**
 *  calInvestmentValue() takes avgPrice and quantity as args and calculates and returns investment value
 *  @avgPrice is of type number
 *  @quantity is of type number
 */
export const calInvestmentValue = (avgPrice: number, quantity: number): number => {
  return avgPrice * quantity
}

/**
 *  calProfitLoss() takes ltp, avgPrice and quantity as args and calculates and returns profit and loss
 *  @ltp is of type number
 *  @avgPrice is of type number
 *  @quantity is of type number
 */
export const calProfitLoss = (ltp: number, avgPrice: number, quantity: number): string => {
  return (calCurrentValue(ltp, quantity) - calInvestmentValue(avgPrice, quantity))?.toFixed(2)
}

/**
 *  calTotalCurrentValue() takes array of stocks, as args and calculates and returns total current value
 *  @stocks is of type array of UserHolding
 */
export const calTotalCurrentValue = (stocks: UserHolding[]): number => {
  let result = stocks.reduce((a, b) => {
    return a + calCurrentValue(b?.ltp, b?.quantity)
  }, 0)
  return result
}

/**
 *  calTotalInvestmentValue() takes array of stocks, as args and calculates and returns total investment value
 *  @stocks is of type array of UserHolding
 */
export const calTotalInvestmentValue = (stocks: UserHolding[]): number => {
  let result = stocks.reduce((a, b) => {
    return a + calInvestmentValue(b?.avgPrice, b?.quantity)
  }, 0)
  return result
}

/**
 *  calTotalProfitLoss() takes array of stocks, as args and calculates and returns total profit and loss
 *  @stocks is of type array of UserHolding
 */
export const calTotalProfitLoss = (stocks: UserHolding[]): string => {
  return (calTotalCurrentValue(stocks) - calTotalInvestmentValue(stocks))?.toFixed(2)
}

/**
 *  calTodaysProfitLoss() takes array of stocks, as args and calculates and returns total todays profit and loss
 *  @stocks is of type array of UserHolding
 */
export const calTodaysProfitLoss = (stocks: UserHolding[]): string => {
  let result = stocks.reduce((a, b) => {
    return a + (b?.close - b?.ltp) * b?.quantity
  }, 0)
  return result?.toFixed(2)
}

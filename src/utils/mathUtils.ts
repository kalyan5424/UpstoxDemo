import { UserHolding } from 'features/home/services/types'

export const calCurrentValue = (ltp: number, quantity: number): number => {
  return ltp * quantity
}

export const calInvestmentValue = (avgPrice: number, quantity: number): number => {
  return avgPrice * quantity
}

export const calProfitLoss = (ltp: number, avgPrice: number, quantity: number): string => {
  return (calCurrentValue(ltp, quantity) - calInvestmentValue(avgPrice, quantity))?.toFixed(2)
}

export const calTotalCurrentValue = (stocks: UserHolding[]): number => {
  let result = stocks.reduce((a, b) => {
    return a + calCurrentValue(b?.ltp, b?.quantity)
  }, 0)
  return result
}

export const calTotalInvestmentValue = (stocks: UserHolding[]): number => {
  let result = stocks.reduce((a, b) => {
    return a + calInvestmentValue(b?.avgPrice, b?.quantity)
  }, 0)
  return result
}

export const totalProfitLoss = (stocks: UserHolding[]): string => {
  return (calTotalCurrentValue(stocks) - calTotalInvestmentValue(stocks))?.toFixed(2)
}

export const todaysProfitLoss = (stocks: UserHolding[]): string => {
  let result = stocks.reduce((a, b) => {
    return a + (b?.close - b?.ltp) * b?.quantity
  }, 0)
  return result?.toFixed(2)
}

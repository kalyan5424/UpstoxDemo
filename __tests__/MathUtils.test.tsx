import {
  calCurrentValue,
  calInvestmentValue,
  calProfitLoss,
  calTodaysProfitLoss,
  calTotalCurrentValue,
  calTotalInvestmentValue,
  calTotalProfitLoss,
} from 'utils/mathUtils'

const userHoldingArr = [
  {
    symbol: 'TCS',
    quantity: 10,
    ltp: 3250.5,
    avgPrice: 2480.3,
    close: 3312,
  },
  {
    symbol: 'Wipro',
    quantity: 80,
    ltp: 550.2,
    avgPrice: 380.3,
    close: 580,
  },
]

test('calCurrentValue 10 * 22 to equal 220', () => {
  expect(calCurrentValue(10, 22)).toBe(220)
})

test('calInvestmentValue 10 * 22 to equal 220', () => {
  expect(calInvestmentValue(10, 22)).toBe(220)
})

test('calProfitLoss with ltp 650.50, avg price 680.30 and quantity 12 to equal 7702.00', () => {
  expect(calProfitLoss(650.5, 680.3, 12)).toEqual('-357.60')
})

test('Calculates TotalCurrentValue for given array to be 76521', () => {
  expect(calTotalCurrentValue(userHoldingArr)).toBe(76521)
})

test('Calculates TotalInvestmentValue for given array to be 55227', () => {
  expect(calTotalInvestmentValue(userHoldingArr)).toBe(55227)
})

test('Calculates TotalProfitLoss for given array to be 21294.00', () => {
  expect(calTotalProfitLoss(userHoldingArr)).toEqual('21294.00')
})

test('Calculates TodaysProfitLoss for given array to be 2999.00', () => {
  expect(calTodaysProfitLoss(userHoldingArr)).toEqual('2999.00')
})

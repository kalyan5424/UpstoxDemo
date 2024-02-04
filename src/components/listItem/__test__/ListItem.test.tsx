/**
 * @format
 */

import 'react-native'

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ListItem from '../ListItem'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const defaultState = {
  type: 'cellular',
  isConnected: true,
  isInternetReachable: false,
  details: {
    isConnectionExpensive: true,
    cellularGeneration: '3g',
  },
}

const mockRNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  fetch: () => {
    return Promise.resolve(defaultState)
  },
  addEventListener: () => {
    return Promise.resolve(defaultState)
  },
  isConnected: {
    fetch: () => {
      return Promise.resolve(defaultState)
    },
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
}

const store = mockStore({
  stocks: {
    data: {
      userHolding: [
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
        {
          symbol: 'SBI',
          quantity: 12,
          ltp: 650.5,
          avgPrice: 680.3,
          close: 613,
        },
        {
          symbol: 'TataMotors',
          quantity: 100,
          ltp: 650.5,
          avgPrice: 280.3,
          close: 780,
        },
        {
          symbol: 'Reliance',
          quantity: 10,
          ltp: 2887.1,
          avgPrice: 2780.3,
          close: 2610,
        },
      ],
    },
    status: '',
    error: {},
  },
})
const onPressMock = jest.fn()

const defaultProps = {
  item: {
    symbol: 'TCS',
    quantity: 10,
    ltp: 3250.5,
    avgPrice: 2480.3,
    close: 3312,
  },
  index: 1,
  onPress: onPressMock,
}

describe('StocksView Component', () => {
  test('StocksView Component rendered successfully', () => {
    const rendered = (store: any, props: any) => {
      return render(
        <Provider store={store}>
          <ListItem {...defaultProps} />
        </Provider>
      )
    }
    const component = rendered(store, defaultProps)
    expect(component)
  })
})

import { fireEvent, render, waitFor } from '@testing-library/react-native'
import BottomView from 'components/bottomView/BottomView'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

const defaultProps = {}

describe('BottomView Component', () => {
  const rendered = (store: any, props: any) => {
    return (
      <Provider store={store}>
        <BottomView />
      </Provider>
    )
  }

  it('BottomView Component rendered successfully', () => {
    const component = rendered(store, defaultProps)
    expect(component)
  })

  it('check UpArrowIcon onpress', async () => {
    const screen = render(
      <Provider store={store}>
        <BottomView />
      </Provider>
    )

    await waitFor(() => {
      const { getByTestId } = screen
      const toggleClick = getByTestId('UpArrowIcon')
      fireEvent.press(toggleClick)
      expect(toggleClick)
    })
  })
})

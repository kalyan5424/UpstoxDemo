import { fetchStocksResAdapter, fetchStocksRqAdapter } from 'features/home/services/transformer'

const fetchStocksMockRes = {
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
}

describe('Fetch Stocks Request Adapter', () => {
  it('fetchStocksRqAdapter transforms request Object', () => {
    const fetchStocksRqObj = { url: '', method: '' }
    const fetchStocksRqObjUpdated = {
      url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
      method: 'GET',
    }
    expect(fetchStocksRqAdapter(fetchStocksRqObj)).toStrictEqual(fetchStocksRqObjUpdated)
  })
  it('fetchStocksRqAdapter transforms response Object', () => {
    expect(fetchStocksResAdapter(fetchStocksMockRes)).toStrictEqual(fetchStocksMockRes)
  })
})

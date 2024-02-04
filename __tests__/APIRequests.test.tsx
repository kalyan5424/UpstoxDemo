import APIRequests from 'features/home/services/APIRequest'

const fetchStocksResponse = {
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

describe('fetchStocksApiRq', () => {
  it('Fetch stocks API request to return response', () => {
    const fetchStocksRqObj = {
      url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
      method: 'GET',
    }
    return APIRequests.fetchStocksApiRq(fetchStocksRqObj).then((data) => {
      expect(data).toStrictEqual(fetchStocksResponse)
    })
  })
  it('throws an error when incorrect url is passed', async () => {
    const fetchStocksRqObj = {
      url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8123',
      method: 'GET',
    }
    APIRequests.fetchStocksApiRq(fetchStocksRqObj).catch((error) => {
      expect(error?.code).toMatch('ERR_BAD_REQUEST')
    })
  })
})

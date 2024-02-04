import getRouteName, { RouteConstants } from 'routes/RouteConstants'

describe('get route name is used to launch screen by passing screen name', () => {
  it('getRouteName takes splash route and return splash screen name', () => {
    expect(getRouteName(RouteConstants.Splash.route)).toStrictEqual(RouteConstants.Splash.screenName)
  })
  it('getRouteName takes home route and return home screen name', () => {
    expect(getRouteName(RouteConstants.Home.route)).toStrictEqual(RouteConstants.Home.screenName)
  })
  it('getRouteName default', () => {
    expect(getRouteName('')).toStrictEqual(RouteConstants.Splash.screenName)
  })
})

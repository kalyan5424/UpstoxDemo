import Home from 'features/home/Home'
import Splash from 'features/splash/Splash'

export const RouteConstants = {
  Splash: {
    screen: Splash,
    route: 'reactNative/splash',
    screenName: 'SplashScreen',
    navigationOptions: {
      title: '',
    },
  },
  Home: {
    screen: Home,
    route: 'reactNative/Home',
    screenName: 'Upstox Holding',
    navigationOptions: {
      title: 'Home',
    },
  },
}

const getRouteName = (screenName: string) => {
  switch (screenName) {
    case RouteConstants.Home.route:
      return RouteConstants.Home.screenName
    case RouteConstants.Splash.route:
      return RouteConstants.Splash.screenName
    default:
      return RouteConstants.Splash.screenName
  }
}

export default getRouteName

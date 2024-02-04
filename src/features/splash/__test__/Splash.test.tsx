/**
 * @format
 */

import 'react-native'

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import Splash from '../Splash'

const mockNavigation = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation
  },
}))

let props = {
  navigation: mockNavigation,
}

it('Splash renders correctly', () => {
  renderer.create(<Splash {...props} />)
})

// describe('setTimeout to navigate from splash', () => {
//   test('schedules a 2-second timer', () => {
//     const callback = jest.fn()

//     expect(setTimeout).toHaveBeenCalledTimes(1)
//     // expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000)

//     jest.runOnlyPendingTimers()

//     expect(callback).toHaveBeenCalled()
//   })
// })

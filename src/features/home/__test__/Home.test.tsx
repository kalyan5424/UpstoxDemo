/**
 * @format
 */

import 'react-native'

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import Home from '../Home'

it('renders correctly', () => {
  renderer.create(<Home />)
})

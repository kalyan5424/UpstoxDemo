import { AxiosError } from 'axios'
import { isEmptyObject, isNetworkError } from 'utils/utils'

test('isEmptyObject function with {} empty object to return true ', () => {
  const obj = {}
  expect(isEmptyObject(obj)).toBeTruthy()
})

test('isEmptyObject function with {} empty object to return true ', () => {
  const obj = new Object()
  expect(isEmptyObject(obj)).toBeTruthy()
})

test('isEmptyObject function with null empty object to return true ', () => {
  const obj = null
  expect(isEmptyObject(obj)).toBeTruthy()
})

test('isEmptyObject function with undefined empty object to return true ', () => {
  const obj = undefined
  expect(isEmptyObject(obj)).toBeTruthy()
})

test('isEmptyObject function with { "key": "value" } empty object to return true ', () => {
  const obj = { key: 'value' }
  expect(isEmptyObject(obj)).toBeFalsy()
})

test('isNetworkError function with ERR_NETWORK code to return true', () => {
  const error = new AxiosError('Network Error', 'ERR_NETWORK')
  expect(isNetworkError(error)).toBeTruthy()
})

test('isNetworkError function with ERR_BAD_REQUEST code to return false ', () => {
  const error = new AxiosError('HTTP Bad request 404', 'ERR_BAD_REQUEST')
  expect(isNetworkError(error)).toBeFalsy()
})

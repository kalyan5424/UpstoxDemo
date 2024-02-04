import { AxiosError } from 'axios'
import { isEmptyObject, isNetworkError } from 'utils/utils'

describe('isEmptyObject() function to check and validate empty, null or undefined objects', () => {
  it('isEmptyObject function with {} empty object to return true ', () => {
    const obj = {}
    expect(isEmptyObject(obj)).toBeTruthy()
  })

  it('isEmptyObject function with undefined empty object to return true ', () => {
    const obj = undefined
    expect(isEmptyObject(obj)).toBeTruthy()
  })

  it('isEmptyObject function with new Object() empty constructor to return true ', () => {
    const obj = new Object()
    expect(isEmptyObject(obj)).toBeTruthy()
  })

  it('isEmptyObject function with null empty object to return true ', () => {
    const obj = null
    expect(isEmptyObject(obj)).toBeTruthy()
  })

  it('isEmptyObject function with { "key": "value" } pairs in object to return false ', () => {
    const person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
    expect(isEmptyObject(person)).toBeFalsy()
  })

  test('isEmptyObject function with properties to return false ', () => {
    const person = {}
    person.firstName = 'John'
    person.lastName = 'Doe'
    person.age = 50
    person.eyeColor = 'blue'
    expect(isEmptyObject(person)).toBeFalsy()
  })
})

test('isNetworkError function with ERR_NETWORK code to return true', () => {
  const error = new AxiosError('Network Error', 'ERR_NETWORK')
  expect(isNetworkError(error)).toBeTruthy()
})

test('isNetworkError function with ERR_BAD_REQUEST code to return false ', () => {
  const error = new AxiosError('HTTP Bad request 404', 'ERR_BAD_REQUEST')
  expect(isNetworkError(error)).toBeFalsy()
})

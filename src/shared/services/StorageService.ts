import {StorageEnum} from '../models/StorageEnum'

interface CustomError {
  name: string
  error: any
}

const getKey = (key: string): string => `${StorageEnum.prefix}:${key.toUpperCase()}`

const getApi = (): any[] => {
  try {
    const localStorage = (window as any)['localStorage']

    return [localStorage, undefined]
  } catch (error) {
    const customError: CustomError = {
      name: 'localStorage might be disabled',
      error
    }

    console.log(customError)

    return [undefined, customError]
  }
}

const getItem = (key: string, parsed = true): any[] => {
  const [api] = getApi()

  try {
    let data

    if (parsed) {
      data = JSON.parse(api.getItem(getKey(key)))
    } else {
      data = api.getItem(getKey(key))
    }

    return [data, undefined]
  } catch (error) {
    const customError: CustomError = {
      name: 'Unable to get item from localStorage',
      error
    }

    console.log(customError)

    return [undefined, customError]
  }
}

const setItem = (key: string, value: string): any[] => {
  const [api] = getApi()

  try {
    api.setItem(getKey(key), value)

    return [value, undefined]
  } catch (error) {
    const customError: CustomError = {
      name: 'Unable to set item into localStorage',
      error
    }

    console.log(customError)

    return [undefined, customError]
  }
}

export const storageService = {
  getItem,
  setItem
}

import {settings} from '../../settings'

const getKey = (key: string): string => {
  const value: string = (settings.storage as any).keys[key]

  return `${settings.storage.prefix}:${value.toUpperCase()}`
}

const getApi = (): any[] => {
  try {
    const localStorage = (window as any)['localStorage']

    return [localStorage, undefined]
  } catch (error) {
    console.log({
      name: 'Error: localStorage might be disabled',
      error
    })

    return [undefined, error]
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
    console.log({
      name: 'Unable to parse localStorage item',
      error
    })

    return [undefined, error]
  }
}

const setItem = (key: string, value: string): any[] => {
  const [api] = getApi()

  try {
    api.setItem(getKey(key), value)

    return [value, undefined]
  } catch (error) {
    console.log({
      name: 'Unable to set item into localStorage',
      error
    })

    return [undefined, error]
  }
}

export const storageService = {
  getItem,
  setItem
}

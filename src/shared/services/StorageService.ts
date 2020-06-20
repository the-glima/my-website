import {getStorageKey} from '../../settings'

const getItem = (key: string, storageType = 'local') =>
  (window as any)[`${storageType}Storage`].getItem(getStorageKey(key))

const getParsedItem = (key: string, storageType?: string) => JSON.parse(getItem(key, storageType)) || null

const setItem = (key: string, value: string, storageType = 'local') =>
  (window as any)[`${storageType}Storage`].setItem(getStorageKey(key), value)

export const storageService = {
  getItem,
  getParsedItem,
  setItem
}

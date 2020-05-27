import {getStorageKey} from '../../settings'

const StorageService = (storageType = 'local') => ({
  getItem: (key: string) => {
    return (window as any)[`${storageType}Storage`].getItem(getStorageKey(key))
  },

  setItem: (key: string, value: string) => {
    ;(window as any)[`${storageType}Storage`].setItem(getStorageKey(key), value)
  }
})

export default StorageService

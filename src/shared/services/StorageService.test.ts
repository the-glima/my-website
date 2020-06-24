import {storageService} from './StorageService'

describe('Storage Service', () => {
  describe('getItem', () => {
    it('should return null if localStorage is disable or not found', () => {
      const [data, error] = storageService.getItem('gists')

      expect(data).toBeNull()
      expect(error).toBeUndefined()
    })

    it('should return value from mocked local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => JSON.stringify({foo: 'bar'}))
        },
        writable: true
      })

      const [data, error] = storageService.getItem('gists')

      expect(data).toEqual({foo: 'bar'})
      expect(error).toBeUndefined()
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
    })

    it('should return error from mocked local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => {
            throw new Error('This is a custom error')
          })
        },
        writable: true
      })

      const [data, error] = storageService.getItem('gists')

      expect(data).toBeUndefined()
      expect(error.error).toBeInstanceOf(Error)
      expect(error.name).toEqual('Unable to get item from localStorage')
      expect(error.error.toString()).toEqual('Error: This is a custom error')
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
    })
  })

  describe('setItem', () => {
    const value = JSON.stringify({test: true})

    it('should return null if localStorage is disable or not found', () => {
      const [data, error] = storageService.setItem('theme', value)

      expect(data).toBeUndefined()
      expect(error.error).toBeInstanceOf(TypeError)
      expect(error.name).toEqual('Unable to set item into localStorage')
      expect(error.error.toString()).toEqual('TypeError: api.setItem is not a function')
      expect(window.localStorage.setItem).toBeUndefined()
    })

    it('should return same value passed', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => JSON.stringify({foo: 'bar'}))
        },
        writable: true
      })

      const [data, error] = storageService.setItem('theme', value)

      expect(data).toEqual(value)
      expect(error).toBeUndefined()
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledWith('GABRIEL-LIMA:THEME', value)
    })

    it('should return error', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => {
            throw new Error('This is a custom error')
          })
        },
        writable: true
      })

      const [data, error] = storageService.setItem('theme', value)

      expect(data).toBeUndefined()
      expect(error.error).toBeInstanceOf(Error)
      expect(error.name).toEqual('Unable to set item into localStorage')
      expect(error.error.toString()).toEqual('Error: This is a custom error')
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledWith('GABRIEL-LIMA:THEME', value)
    })
  })
})

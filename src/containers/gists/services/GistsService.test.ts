import {GistsService} from './GistsService'

import {gistsCollectionMock} from '../../../../test/gists-mock'

describe('GistsService', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(gistsCollectionMock)),
        setItem: jest.fn(() => gistsCollectionMock)
      },
      writable: true
    })
  })

  it('getUrl: return an url', () => {
    const urlParam = {
      url: 'www.example.com',
      user: 'john-doe',
      perPage: 100
    }

    const result = 'www.example.com/john-doe/gists?per_page=100'

    expect(GistsService.getUrl(urlParam)).toBe(result)
  })

  it('setGistsLocalStorage: should set gists in local storage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(() => gistsCollectionMock)
      }
    })

    const now = Date.now()
    GistsService.setGistsLocalStorage({
      date: now,
      collection: []
    })

    expect(window.localStorage.setItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS', `{"date":${now},"collection":[]}`)
  })

  it('setGistsLocalStorage: should not call localStorage setItem', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(() => gistsCollectionMock)
      }
    })

    GistsService.setGistsLocalStorage(null as any)

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(0)
  })

  it('getGistsLocalStorage: should get gists from local storage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(gistsCollectionMock))
      }
    })

    const result = GistsService.getGistsLocalStorage()

    expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
    expect(result).toMatchSnapshot()
  })

  it('getGistsLocalStorage: should return null when can not find gists from local storage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null)
      }
    })

    const result = GistsService.getGistsLocalStorage()

    expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
    expect(result).toBeNull()
  })
})

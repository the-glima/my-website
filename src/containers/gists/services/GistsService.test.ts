import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'

import {gistsService} from './GistsService'

import {gistsResponseMock} from '../../../../test/mocks'

describe('Gists Service', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(gistsResponseMock)),
        setItem: jest.fn(() => gistsResponseMock)
      },
      writable: true
    })

    enableFetchMocks()
  })

  afterEach(() => {
    fetchMock.resetMocks()
  })

  describe('Fetching Gists', () => {
    it('fetchGists: return fetched gists', async (done) => {
      fetchMock.mockResponseOnce(JSON.stringify(gistsResponseMock))

      const result = await gistsService.fetchGists()

      expect(result).toMatchSnapshot()
      done()
    })

    it('fetchGists: return error when trying to fetch gists', async (done) => {
      fetchMock.mockRejectOnce(new Error('Not Found!'))
      jest.spyOn(gistsService, 'getUrl').mockImplementationOnce(() => 'https://example.com')

      const result = await gistsService.fetchGists()

      expect(result.toString()).toBe('Error: Not Found!')
      expect((fetch as any).mock.calls.length).toEqual(1)
      expect((fetch as any).mock.calls[0][0]).toEqual('https://example.com')
      expect(result).toMatchSnapshot()
      done()
    })
  })

  describe('Data', () => {
    it('getUrl: return an url', () => {
      const urlParam = {
        url: 'www.example.com',
        user: 'john-doe',
        perPage: 100
      }

      const result = 'www.example.com/john-doe/gists?per_page=100'

      expect(gistsService.getUrl(urlParam)).toBe(result)
    })

    it('mapGists: return a mapped array of gists', () => {
      const result = gistsService.mapGists(gistsResponseMock as any)

      expect(result).toMatchSnapshot()
    })
  })

  describe('Local Storage', () => {
    it('setGistsLocalStorage: should set gists in local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => gistsResponseMock)
        }
      })

      const now = Date.now()
      gistsService.setGistsLocalStorage({
        date: now,
        collection: [
          {
            id: '1',
            url: 'https://example.com',
            files: [
              {
                filename: 'test.js',
                type: 'application/javascript',
                language: 'JavaScript',
                raw_url: 'https://example.com/gist',
                size: 1000
              }
            ],
            title: 'Gist Sample',
            language: 'JavaScript'
          }
        ]
      })

      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'GABRIEL-LIMA:GISTS',
        `{"date":${now},"collection":[{"id":"1","url":"https://example.com","files":[{"filename":"test.js","type":"application/javascript","language":"JavaScript","raw_url":"https://example.com/gist","size":1000}],"title":"Gist Sample","language":"JavaScript"}]}`
      )
    })

    it('setGistsLocalStorage: should not call localStorage setItem', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => gistsResponseMock)
        }
      })

      gistsService.setGistsLocalStorage(null as any)

      expect(window.localStorage.setItem).toHaveBeenCalledTimes(0)
    })

    it('getGistsLocalStorage: should get gists from local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => JSON.stringify(gistsResponseMock))
        }
      })

      const result = gistsService.getGistsLocalStorage()

      expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
      expect(result).toMatchSnapshot()
    })

    it('getGistsLocalStorage: should return null when can not find gists from local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => null)
        }
      })

      const result = gistsService.getGistsLocalStorage()

      expect(window.localStorage.getItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS')
      expect(result).toBeNull()
    })
  })
})

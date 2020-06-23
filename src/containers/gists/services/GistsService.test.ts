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
    it('getGists: return fetched gists', async (done) => {
      fetchMock.mockResponseOnce(JSON.stringify(gistsResponseMock))

      const result = await gistsService.getGists()

      expect(result).toMatchSnapshot()
      done()
    })

    // it('getGists: return error when trying to fetch gists', async (done) => {
    //   fetchMock.mockRejectOnce(new Error('Not Found!'))

    //   const result = await gistsService.getGists()

    //   expect(result.toString()).toBe('Error: Not Found!')
    //   expect((fetch as any).mock.calls.length).toEqual(1)
    //   expect(result).toMatchSnapshot()
    //   done()
    // })
  })

  describe('Local Storage', () => {
    it('saveGists: should set gists in local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => gistsResponseMock)
        }
      })

      const now = Date.now()
      gistsService.saveGists({
        date: now,
        logos: [],
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

    it('saveGists: should not call localStorage setItem', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => gistsResponseMock)
        }
      })

      gistsService.saveGists(null as any)

      expect(window.localStorage.setItem).toHaveBeenCalledTimes(0)
    })
  })
})

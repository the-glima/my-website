import React from 'react'
import {Provider} from 'react-redux'
import createMockStore from 'redux-mock-store'
import {I18nextProvider} from 'react-i18next'
import i18n from '../../../i18n'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gists from './Gists'
import {GistsEffect} from './GistsEffect'
import {gistsCollectionMock} from '../../../test/gists-mock'

describe('Gists', () => {
  let mockStore: any
  let spy: any
  let setGistsLocalStorage: any

  // const fakeAxios = {
  //   get: jest.fn(() => Promise.resolve({ data: "Richard" }))
  // };

  beforeEach(() => {
    mockStore = createMockStore()

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(gistsCollectionMock)),
        setItem: jest.fn(() => gistsCollectionMock)
      },
      writable: true
    })

    spy = jest.spyOn(GistsEffect, 'setGistsLocalStorage')
    setGistsLocalStorage = GistsEffect.setGistsLocalStorage(gistsCollectionMock)
  })

  test.skip('get and set gists to local storage', () => {
    const {queryByText, queryAllByTestId} = render(
      <Provider store={mockStore({})}>
        <I18nextProvider i18n={i18n}>
          <Gists />
        </I18nextProvider>
      </Provider>
    )

    const spy = jest.spyOn(GistsEffect, 'setGistsLocalStorage')
    const setGistsLocalStorage = GistsEffect.setGistsLocalStorage({data: null})

    expect(spy).toHaveBeenCalledTimes(1)
    expect(setGistsLocalStorage).toEqual(Promise.resolve({}))
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith('GABRIEL-LIMA:GISTS', '{"data":null}')

    expect(queryByText('Sorry, something went wrong! Please, try again later.')).toBeInTheDocument()
    expect(queryAllByTestId('gist-item')).toHaveLength(0)

    spy.mockRestore()
  })

  test.skip('check gist items', () => {
    const {queryAllByTestId} = render(
      <Provider store={mockStore({})}>
        <I18nextProvider i18n={i18n}>
          <Gists />
        </I18nextProvider>
      </Provider>
    )

    expect(spy).toHaveBeenCalledTimes(1)
    expect(setGistsLocalStorage).toEqual(Promise.resolve(gistsCollectionMock))
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'GABRIEL-LIMA:GISTS',
      `${JSON.stringify(gistsCollectionMock)}`
    )

    expect(queryAllByTestId('gist-item')).toHaveLength(8)
    spy.mockRestore()
  })
})

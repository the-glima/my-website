import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Intro from './Intro'

test('renders learn react link', () => {
  const {getByText} = render(<Intro />)
  const linkElement = getByText(/Gabriel Lima/i)
  expect(linkElement).toBeInTheDocument()
})

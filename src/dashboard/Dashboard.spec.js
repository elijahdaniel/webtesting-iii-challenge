import React from 'react'
import { render } from 'react-testing-library'

import Dashboard from './Dashboard'
import Controls from '../controls/Controls'
import Display from '../display/Display'

// import 'jest-dom/extend-expect'

test('dashboard renders without crashing', () => {
  render(<Dashboard />)
})

// creating snapshot to watch changes
test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot()
})

test('dashboard shows display and controls', () => {
  render(
    <Dashboard>
      <Display />
      <Controls />
    </Dashboard>
  )
})

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/open/i)
  getByText(/close/i)
  getByText(/lock/i)
  getByText(/unlocked/i)
})

test(`control's props should be calling functions`, () => {
  // mock functions
  const toggleLocked = jest.fn()
  const toggleClosed = jest.fn()

  render(<Controls toggleLocked={toggleLocked} toggleClosed={toggleClosed} />)
})

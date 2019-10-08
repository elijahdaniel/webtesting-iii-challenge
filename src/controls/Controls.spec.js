import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import Controls from './Controls.js'

describe('<Controls />', () => {
  it('button is disabled', () => {
    const { getByText, getByTestId, container } = render(
      <Controls locked={true} closed={true} />
    )

    const disabledButton = getByText(/b/i)

    expect(getByTestId(container, disabledButton)).toBeDisabled()

    expect(disabledButton).toHaveAttribute('disabled')
  })
})

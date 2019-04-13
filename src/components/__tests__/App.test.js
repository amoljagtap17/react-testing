import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import App from '../App'

// We could have named this file just App.js

it('shows a comment box', () => {
  const div = document.createElement('div')

  render(<App />, div)

  // console.log('div : ', div.innerHTML)

  // expect(div.innerHTML).toContain('Comment Box')

  unmountComponentAtNode(div)
})

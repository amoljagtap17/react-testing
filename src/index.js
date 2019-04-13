import React from 'react'
import { render } from 'react-dom'

import Store from 'store/Store'
import rootReducer from 'reducers'

import App from 'components/App'

render(
  <Store rootReducer={rootReducer}>
    <App />
  </Store>,
  document.querySelector('#root')
)

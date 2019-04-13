import React from 'react'
import Store from 'store/Store'
import rootReducer from 'reducers'

const Root = ({ children }) => (
  <Store rootReducer={rootReducer}>{children}</Store>
)

export default Root

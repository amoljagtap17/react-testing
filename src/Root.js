import React from 'react'
import Store from 'store/Store'
import rootReducer from 'reducers'

const Root = ({ initialValue = {}, children }) => (
  <Store rootReducer={rootReducer} initialValue={initialValue}>
    {children}
  </Store>
)

export default Root

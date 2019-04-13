import React, { useReducer } from 'react'
import StoreContext from 'contexts/StoreContext'

const Store = ({ initialValue, rootReducer, children }) => {
  const initialState = rootReducer(initialValue, { type: '__INIT__' })
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store

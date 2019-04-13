import { useContext } from 'react'
import StoreContext from 'contexts/StoreContext'

export default (useStore = () => useContext(StoreContext))

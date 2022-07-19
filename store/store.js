import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

// initial states here
const initalState = {}

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
}

const store = makeStore()

// export an assembled wrapper
export default store

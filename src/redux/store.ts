// import logger from 'redux-logger'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { colorModeSlice } from './slice/colorMode'

const rootReducer = combineReducers({
  colorMode: colorModeSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  // .concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

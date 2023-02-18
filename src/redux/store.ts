// import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { colorModeSlice } from './slice/colorMode'
import storage from './persist'

const persistConfig = {
  key: 'macjjuni',
  storage,
}

const rootReducer = combineReducers({
  colorMode: colorModeSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  // .concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

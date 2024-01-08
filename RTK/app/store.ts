import cartReducer from "@/RTK/features/cart-slice";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// @ts-ignore
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const logger = createLogger();
// Define your reducers
const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

const persistConfig = {
  key: 'app',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
  devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export const persistedStore = persistStore(store);

export type StoreType = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

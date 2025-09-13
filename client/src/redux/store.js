import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice";
 import storage from 'redux-persist/lib/storage'

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";



const persistConfig =({
  key: "root",
 version: 1,
 storage
})
const persistedReducer = persistReducer(persistConfig, productReducer);



export const store = configureStore({
  reducer: { Emart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export let persistor = persistStore(store)
export default store;

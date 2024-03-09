import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigData = {
  key: "data",
  version: 1,
  storage,
};

const persistedReducerData = persistReducer(persistConfigData, dataReducer);

export const store = configureStore({
  reducer: {
    data: persistedReducerData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

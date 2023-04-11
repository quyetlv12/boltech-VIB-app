import thunk from "redux-thunk";
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import _ from "lodash";
import { batchedSubscribe } from "redux-batched-subscribe";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AppReducer from "./app";
import buyInsuranceReducer from "./buyInsurance";
const rootReducer = combineReducers({
  app: AppReducer,
  buyInsurance: buyInsuranceReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const debounceNotify = _.debounce((notify: any) => notify());
const persistedReducer = persistReducer(persistConfig, rootReducer);
export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: process.env.NODE_ENV !== 'development' ? [thunk, logger] : undefined,
    enhancers: [batchedSubscribe(debounceNotify)],
  });
}
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

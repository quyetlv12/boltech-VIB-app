import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AppReducer from './app';
import buyInsuranceReducer from './buyInsurance';

const rootReducer = combineReducers({
    app: AppReducer,
    buyInsurance:buyInsuranceReducer
});

export function makeStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
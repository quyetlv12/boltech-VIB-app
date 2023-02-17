import { Action, combineReducers, compose, configureStore, ThunkAction } from '@reduxjs/toolkit';
import AppReducer from './app';
import buyInsuranceReducer from './buyInsurance';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    app: AppReducer,
    buyInsurance:buyInsuranceReducer
});


const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export function makeStore() {
    return configureStore({
        reducer: persistedReducer,
        middleware: [thunk],
        devTools: process.env.NODE_ENV !== 'production',
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
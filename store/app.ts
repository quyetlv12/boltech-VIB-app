import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AuthInfo {
    isAuthenticated: boolean;
    user: any,
    username : string;
    authToken : string;
}

export interface AppState {
    isLoading: boolean;
    auth : AuthInfo | null
}

export const initialState : AppState = {
    isLoading: false,
    auth: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showLoading(state) {
            state.isLoading = true
        },
        hideLoading(state) {
            state.isLoading = false
        }
    },
});

export const { showLoading, hideLoading } = appSlice.actions;
export default appSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

export interface BuyInsuranceState {
    step: number;
    stepData: any;
}

export const initialState: BuyInsuranceState = {
    step: 0,
    stepData: null,
};

const buyInsurance = createSlice({
    name: 'buyInsurance',
    initialState,
    reducers: {

    },
});

export const {} = buyInsurance.actions;
export default buyInsurance.reducer;
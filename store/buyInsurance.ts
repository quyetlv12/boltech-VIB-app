import {createSlice} from "@reduxjs/toolkit";

export interface BuyInsuranceState {
    step: number;
    stepData: any;
    type : ''
}

export const initialState: BuyInsuranceState = {
    step: 0,
    stepData: null,
    type : ''
};

const buyInsurance = createSlice({
    name: 'buyInsurance',
    initialState,
    reducers: {

    },
});

export const {} = buyInsurance.actions;
export default buyInsurance.reducer;
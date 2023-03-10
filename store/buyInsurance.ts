import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INPUT_DATA } from "interfaces/insurances";

export interface BuyInsuranceState {
  step: number;
  stepData: any | undefined;
  type: any;
  step0data: object;
  contractId: string;
  step_1: object;
  step_2: object;
  step_3: object;
  maxStep: number;
  isInput: boolean;
  inputData : object;
  selectArr : [];
}

export const initialState: BuyInsuranceState = {
  step: 0,
  stepData: {},
  contractId: "",
  step_1: {},
  step_2: {},
  step_3: {},
  type: null,
  step0data: {},
  maxStep: 3,
  isInput: false,
  inputData : {},
  selectArr : []
};

const buyInsurance = createSlice({
  name: "buyInsurance",
  initialState,
  reducers: {
    selectInsuraneBuy: (
      state: Draft<typeof initialState>,
      action: PayloadAction<any>
    ) => {
      state.type = action.payload.type;
      state.step0data = action.payload;
    },
    backStep: (state: Draft<typeof initialState>) => {
      if (state.step === 0) {
        return;
      } else if (state.step >= 0 && state.step <= state.maxStep) {
        state.step--;
      }
    },
    nextStep: (state: Draft<typeof initialState>) => {
      if (state.step === null) {
        state.step = 0;
      } else if (state.step >= 0 && state.step < state.maxStep) {
        state.step++;
      } else if (state.step === state.maxStep) {
        return;
      }
    },
    resetStepData: (state: Draft<typeof initialState>) => {
      state.step = 0;
      state.stepData = null;
      state.type = null;
      state.step0data = {};
    },
    turnOnInput: (
      state: Draft<typeof initialState>, 
      action: PayloadAction<INPUT_DATA>
      
    ) => {
      state.isInput = true;
      state.inputData = action.payload
      
    },
    turnOffInput: (
      state: Draft<typeof initialState>
    ) => {
      state.isInput = false;
    },
  },
});
// Selectors
export const getStep = (state: any) => state.buyInsurance.step;
export const getTypeInsurance = (state: any) => state.buyInsurance.type;
export const getStep0data = (state: any) => state.buyInsurance.step0data;
export const getMaxStep = (state: any) => state.buyInsurance.maxStep;
export const getInputStatus = (state: any) => state.buyInsurance.isInput;
export const getInputData = (state: any) => state.buyInsurance.inputData;
export const getArrSelect = (state: any) => state.buyInsurance.selectArr;

// Reducers and actions
export const {
  selectInsuraneBuy,
  backStep,
  nextStep,
  resetStepData,
  turnOnInput,
  turnOffInput,
} = buyInsurance.actions;
export default buyInsurance.reducer;

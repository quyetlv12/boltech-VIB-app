import { KEY_CONTRACT_ID, KEY_STEP } from "@constants";
import { Draft, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CAR_CONTRACT, API_CAR_TYPE } from "configs";
import { INPUT_DATA } from "interfaces/insurances";
import { RootState } from "store";
import { HttpClient } from "utills/HttpClient";

export interface BuyInsuranceState {
  step: number;
  stepData: object | undefined | null;
  type: any;
  step0data: object;
  contractId: string;
  step_1: object;
  step_2: object;
  step_3: object;
  maxStep: number;
  isInput: boolean;
  inputData: object;
  carTypes: [];
  brands: [];
  contractInfo : {} ,
  vehicels : {}
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
  inputData: {},
  carTypes: [],
  brands: [],
  contractInfo : {} ,
  vehicels : {}
};

// Define the async thunk
export const fetchUser = createAsyncThunk<object, string, { state: RootState }>(
  'user/fetchUser',
  async (data , thunkAPI) => {
    try {
      // Fetch user data from API
      const userData = await HttpClient.get(API_CAR_TYPE)

      // Return the fetched user data as the payload
      return userData;
    } catch (error) {
      // Handle any errors that occur during the API request
      // You can also reject the thunk with a custom error message using `thunkAPI.rejectWithValue()`
      return thunkAPI.rejectWithValue('Failed to fetch user data');
    }
  }
);

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
    setCarType: (
      state: Draft<typeof initialState>,
      action: PayloadAction<any>

    ) => {
      state.carTypes = action.payload;
    },
    setBrands: (
      state: Draft<typeof initialState>,
      action: PayloadAction<any>

    ) => {
      state.brands = action.payload;
    },
    updateProps : (
      state: Draft<typeof initialState>,
      action: PayloadAction<any>
    )=> {
      return { ...state, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        // state.loading = true;
        // state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // state.loading = false;
        // state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});
// Selectors
export const getStep = (state: any) => state.buyInsurance.step;
export const getTypeInsurance = (state: any) => state.buyInsurance.type;
export const getStep0data = (state: any) => state.buyInsurance.step0data;
export const getMaxStep = (state: any) => state.buyInsurance.maxStep;
export const getInputStatus = (state: any) => state.buyInsurance.isInput;
export const getInputData = (state: any) => state.buyInsurance.inputData;
export const getCarTypes = (state: any) => state.buyInsurance.carTypes;
export const getBrands = (state: any) => state.buyInsurance.brands;
export const getStep1Data = (state: any) => state.buyInsurance.step_1
export const getContractId = (state : any) => state.buyInsurance[KEY_CONTRACT_ID]

// Reducers and actions
export const {
  selectInsuraneBuy,
  backStep,
  nextStep,
  resetStepData,
  turnOnInput,
  turnOffInput,
  setCarType,
  setBrands,
  updateProps
} = buyInsurance.actions;
export default buyInsurance.reducer;

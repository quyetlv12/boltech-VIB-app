import { AxiosRequestConfig } from "axios";
import { StaticImageData } from "next/image";
import { object } from "yup";

export interface PRODUCT {
  name?: string;
  icon?: string | StaticImageData | null | undefined;
  type?: string;
  slogan?: string;
  benefit?: any[];
  link?: string;
  logo?: StaticImageData | undefined;
}
export interface BENEFIT {
  icon?: string;
  content?: string;
}
export interface ROW_INFO {
  content: string;
  key_form: string;
  typeInput: string;
}
export interface ICON_OBJ {
  key?: string,
  icon?: StaticImageData | string
}
export interface INPUT_DATA {
  content: string,
  key_form: string,
  typeInput: string,
  iconArr?: ICON_OBJ[],
  isShowSelectText? : boolean
}
export interface BRANS_PROPS {
  brand: string,
  id: number,
  isEnable: boolean,
  name: string
}
export interface CAR_TYPE_PROPS {
  name?: string,
  brands?: BRANS_PROPS[]
}
export interface ARR_LIST_SELECT_PROPS {
  name? : string , 
  addonCode? : string,
  equalValue? : string ,
  equalField? : string,
  brands? : []
}
export interface STEP_1_DATA_PROPS {
  addons : string ;
  brand : string ;
  responsibility : number | string;
  seat : number | string ;
  year : string,
  type : string;
  value : number | string;
}
export interface CONTRACT_CREATE_PROPS {
  contractType : string,
  contractValue : number,
  ownerId : number | null,
  refId : number | null,
  vehicleValue : number
}
export interface interceptorsProps extends AxiosRequestConfig {
  appId : string
}

export interface STEP_0_DATA extends PRODUCT {}
export interface BuyInsuranceState {
  step: number;
  stepData: object | undefined | null;
  type: any;
  step0data: STEP_0_DATA;
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

export interface APP_STATE_PROPS {
  auth : object |  null
  isLoading : boolean
}
export interface ROOT_STATE_PROPS {
  app : APP_STATE_PROPS ;
  buyInsurance : BuyInsuranceState ; 
  _persist : object;
}
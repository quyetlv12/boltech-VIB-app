'use client'
import {
  INPUT_CURRENCY_NUMBER,
  INPUT_DATE_TYPE,
  INPUT_NUMBER_TYPE,
  INPUT_SELECT_TYPE,
  INPUT_STRING_TYPE,
  INPUT_UPLOAD_IMAGE
} from "@constants";
import { INPUT_DATA, STEP_1_DATA_PROPS } from "interfaces/insurances";
import msIcon from "../../../../assests/insurance/MS-giaydkxe.png";
import mtIcon from "../../../../assests/insurance/MT-giaydkxe.png";
import mask1 from "../../../../assests/insurance/Mask Group-1.png";
import mask2 from "../../../../assests/insurance/Mask Group-2.png";
import mask3 from "../../../../assests/insurance/Mask Group-3.png";
import mask4 from "../../../../assests/insurance/Mask Group-4.png";
import mask5 from "../../../../assests/insurance/Mask Group-5.png";
import mask6 from "../../../../assests/insurance/Mask Group-6.png";
import gdkIcon from "../../../../assests/insurance/Mask Group.png";

export const KEY_SEATS = "seat";
export const KEY_CAR_TYPE = "type";
export const KEY_YEAR = "year";
export const KEY_ADDONS = "addons";
export const KEY_VALUE = "value";
export const KEY_RESPONSIBILITY = "responsibility";
export const KEY_BRAND = 'brand'
export const CUSTOM_FIELD: INPUT_DATA[] = [
  {
    content: "số ghế ngồi",
    key_form: KEY_SEATS,
    typeInput: INPUT_NUMBER_TYPE,
  },
  {
    content: "loại xe",
    key_form: KEY_CAR_TYPE,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "dòng xe",
    key_form: KEY_BRAND,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "năm sản xuất",
    key_form: KEY_YEAR,
    typeInput: INPUT_DATE_TYPE,
  },
  {
    content: "giá trị xe",
    key_form: KEY_VALUE,
    typeInput: INPUT_CURRENCY_NUMBER,
  },
  {
    content: "mức trách nhiệm BH tai nạn người ngồi",
    key_form: KEY_RESPONSIBILITY,
    typeInput: INPUT_CURRENCY_NUMBER,
  },
  {
    content: "điều khoản mở rộng",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
    isShowSelectText : true
  },
];
export const CUSTOM_FIELD_STEP_2_1: INPUT_DATA[] = [
  {
    content: "ngày bắt đầu",
    key_form: KEY_ADDONS,
    typeInput: INPUT_DATE_TYPE,
  },
];
export const CUSTOM_FIELD_STEP_2_2: INPUT_DATA[] = [
  {
    content: "nhãn hiệu",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "mẫu",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "biển kiểm soát",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
  {
    content: "số khung (6 số cuối)",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
  {
    content: "số máy",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
];

export const CUSTOM_FIELD_STEP_2_3: INPUT_DATA[] = [
  {
    content: "Số chỗ ngồi",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "loại xe",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "năm sản xuất",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "giá trị xe",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "mức trách nhiệm BH tai nạn người ngồi",
    key_form: KEY_ADDONS,
    typeInput: INPUT_CURRENCY_NUMBER,
  },
  {
    content: "điều khoản mở rộng",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
];

export const CUSTOM_FIELD_STEP_2_4: INPUT_DATA[] = [
  {
    content: "mặt trước/ Mặt sau giấy đăng ký xe",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "mt",
        icon: mtIcon,
      },
      {
        key: "ms",
        icon: msIcon,
      },
    ],
  },
  {
    content: "giấy đăng kiểm xe (Còn hạn)",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "gdk",
        icon: gdkIcon,
      },
    ],
  },
];

export const CUSTOM_FIELD_STEP_2_5: INPUT_DATA[] = [
  {
    content: "mặt trước/ Mặt sau của xe (ảnh thực tế)",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "mt",
        icon: mask1,
      },
      {
        key: "ms",
        icon: mask2,
      },
    ],
  },
  {
    content: "bên trái/ Bên phải của xe (ảnh thực tế)",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "bt",
        icon: mask3,
      },
      {
        key: "bp",
        icon: mask4,
      },
    ],
  },
  {
    content: "ảnh tem đăng kiểm",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "tdk",
        icon: mask5,
      },
    ],
  },
  {
    content: "mặt đồng hồ (taplo)",
    key_form: KEY_ADDONS,
    typeInput: INPUT_UPLOAD_IMAGE,
    iconArr: [
      {
        key: "mdh",
        icon: mask6,
      },
    ],
  },
];
export const CUSTOM_FIELD_STEP_3_1: INPUT_DATA[] = [
  {
    content: "nhà cung cấp ",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "ngày bắt đầu",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "ngày kết thúc",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "thời gian bảo hiểm",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
];
export const CUSTOM_FIELD_STEP_3_2: INPUT_DATA[] = [
  {
    content: "họ và tên",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
  {
    content: "giới tính",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "ngày sinh",
    key_form: KEY_ADDONS,
    typeInput: INPUT_DATE_TYPE,
  },
];

export const CUSTOM_FIELD_STEP_3_3: INPUT_DATA[] = [
  {
    content: "loại giấy tờ",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "số CMND",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "ngày cấp",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "nơi cấp",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
];

export const CUSTOM_FIELD_STEP_3_4: INPUT_DATA[] = [
  {
    content: "email",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
  {
    content: "số điện thoại",
    key_form: KEY_ADDONS,
    typeInput: INPUT_NUMBER_TYPE,
  },
];

export const CUSTOM_FIELD_STEP_3_5: INPUT_DATA[] = [
  {
    content: "địa chỉ",
    key_form: KEY_ADDONS,
    typeInput: INPUT_STRING_TYPE,
  },
  {
    content: "tỉnh/ Thành phố",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
  {
    content: "phường/ Xã",
    key_form: KEY_ADDONS,
    typeInput: INPUT_SELECT_TYPE,
  },
];

export const getObjectContract = (data:STEP_1_DATA_PROPS):object =>{  
  const {value} = data
  return {
    "contractValue": Number(value),
    "contractType": "CC",
    "vehicleValue": Number(value),
}
}
export const getObjectVehicel = (data:STEP_1_DATA_PROPS , contractId:string):object =>{
  return {
    "contractId": contractId,
    "vehicleStatus": "OLD",
    "numberPlate": "2312",
    "usage": "KKD",
    "issPlace": "VIETNAM",
    "issDate": "2023-04-10T17:00:00.000Z",
    "vehicleTypeId": 1,
    "manufacturerName": "CUULONG",
    "brandName": "DFA",
    "initValue": 8000000000,
    "contractValue": 8000000000,
    "frameNo": "2123",
    "machineNo": "232312",
    "seats": 1
  }
}
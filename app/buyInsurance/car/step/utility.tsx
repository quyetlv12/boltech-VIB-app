import { INPUT_NUMBER_TYPE, INPUT_SELECT_TYPE, INPUT_UPLOAD_IMAGE } from "@constants"
import { INPUT_DATA } from "interfaces/insurances"
import mtIcon from "../../../../assests/insurance/MT-giaydkxe.png"
import msIcon from "../../../../assests/insurance/MS-giaydkxe.png"
import gdkIcon from "../../../../assests/insurance/Mask Group.png"
import mask1 from "../../../../assests/insurance/Mask Group-1.png"
import mask2 from "../../../../assests/insurance/Mask Group-2.png"
import mask3 from "../../../../assests/insurance/Mask Group-3.png"
import mask4 from "../../../../assests/insurance/Mask Group-4.png"
import mask5 from "../../../../assests/insurance/Mask Group-5.png"
import mask6 from "../../../../assests/insurance/Mask Group-6.png"

export const KEY_SEATS = 'seat'
export const KEY_CAR_TYPE = 'type'
export const KEY_YEARR = 'year'
export const KEY_ADDONS = 'addons'
export const KEY_VALUE = 'seat'
export const KEY_RESPONSIBILITY = 'responsibility'

export const CUSTOM_FIELD:INPUT_DATA[] = [
    {
        content : "Số ghế ngồi",
        key_form : KEY_SEATS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Loại xe",
        key_form : KEY_CAR_TYPE,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Năm sản xuất",
        key_form : KEY_SEATS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Giá trị xe",
        key_form : KEY_VALUE,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Mức trách nhiệm BH tai nạn người ngồi",
        key_form : KEY_RESPONSIBILITY,
        typeInput : INPUT_NUMBER_TYPE
    },
    {
        content : "Điều khoản mở rộng",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    }
]
export const CUSTOM_FIELD_STEP_2_1:INPUT_DATA[] = [
    {
        content : "Ngày bắt đầu",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    }
]
export const CUSTOM_FIELD_STEP_2_2:INPUT_DATA[] = [
    {
        content : "Nhãn hiệu",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Mẫu",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Biển kiểm soát",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Số khung (6 số cuối)",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Số máy",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    }
]

export const CUSTOM_FIELD_STEP_2_3:INPUT_DATA[] = [
    {
        content : "Số chỗ ngồi",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Loại xe",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Năm sản xuất",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Giá trị xe",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Mức trách nhiệm BH tai nạn người ngồi",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    },
    {
        content : "Điều khoản mở rộng",
        key_form : KEY_ADDONS,
        typeInput : INPUT_SELECT_TYPE
    }
]


export const CUSTOM_FIELD_STEP_2_4:INPUT_DATA[] = [
    {
        content : "Mặt trước/ Mặt sau giấy đăng ký xe",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [mtIcon, msIcon]
    },
    {
        content : "Giấy đăng kiểm xe (Còn hạn)",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [gdkIcon]
    }    
]

export const CUSTOM_FIELD_STEP_2_5:INPUT_DATA[] = [
    {
        content : "Mặt trước/ Mặt sau của xe (ảnh thực tế)",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [mask1 , mask2]
    },
    {
        content : "Bên trái/ Bên phải của xe (ảnh thực tế)",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [mask3 , mask4]
    },
    {
        content : "Ảnh tem đăng kiểm",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [mask5]
    },
    {
        content : "Mặt đồng hồ (taplo)",
        key_form : KEY_ADDONS,
        typeInput : INPUT_UPLOAD_IMAGE,
        iconArr : [mask6]
    },
]
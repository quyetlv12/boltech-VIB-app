import { INPUT_NUMBER_TYPE, INPUT_SELECT_TYPE } from "@constants"

export const KEY_SEATS = 'seat'
export const KEY_CAR_TYPE = 'type'
export const KEY_YEARR = 'year'
export const KEY_ADDONS = 'addons'
export const KEY_VALUE = 'seat'
export const KEY_RESPONSIBILITY = 'responsibility'

export const CUSTOM_FIELD = [
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
import CarIcon from "../assests/products/car.png";
import CarTNDSIcon from "../assests/products/carTNDS.png";
import HeathcareSIcon from "../assests/products/heathCare.png";
import DomesticIcon from "../assests/products/domestic.png";
import carLogo from "../assests/banner/car.png";
import _ from 'lodash'
import HomeIcon from "../assests/products/home.png";
import { AppDispatch, RootState } from "store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import carBen1 from '../assests/iconStep0/carBen1.png'
import carBen2 from '../assests/iconStep0/carBen2.png'
import carBen3 from '../assests/iconStep0/carBen3.png'
import { getInputStatus } from "store/buyInsurance";
export const API_TIME_OUT:number = 10000;
export const CAR:string = "car";
export const CARTNDS:string = "carTnds";
export const HOME:string = "home";
export const HEATH_CARE:string = "heathCare";
export const DOMESTIC:string = "domestic";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// ==============COLOR==============
export const TEXT_FOOTER_COLOR:string = '#6C727F'
export const PATH_HOME:string = '/'
// ====================================
export const PRODUCTS = [
  {
    name: "Bảo hiểm Xe Ôtô",
    icon: CarIcon,
    type: CAR,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
    benefit: [
      {
        icon: carBen1,
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: carBen2,
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: carBen3,
        content: "Hỗ trợ cứu hộ 24/7",
      },
    ],
    link : "/buyInsurance/car",
    logo : carLogo
  },
  {
    name: "Bảo hiểm Trách nhiệm dân sự Ôtô",
    icon: CarTNDSIcon,
    type: CAR,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
      benefit: [
        {
          icon: carBen1,
          content: "Hệ thống gara xe bảo hành trên toàn quốc",
        },
        {
          icon: carBen2,
          content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
        },
        {
          icon: carBen3,
          content: "Hỗ trợ cứu hộ 24/7",
        },
      ],
    link : "/buyInsurance"
  },
  {
    name: "Bảo hiểm Nhà",
    icon: HomeIcon,
    type: HOME,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
      benefit: [
        {
          icon: carBen1,
          content: "Hệ thống gara xe bảo hành trên toàn quốc",
        },
        {
          icon: carBen2,
          content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
        },
        {
          icon: carBen3,
          content: "Hỗ trợ cứu hộ 24/7",
        },
      ],
    link : "/buyInsurance"
  },
  {
    name: "Bảo hiểm Sức Khoẻ",
    icon: HeathcareSIcon,
    type: HEATH_CARE,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
      benefit: [
        {
          icon: carBen1,
          content: "Hệ thống gara xe bảo hành trên toàn quốc",
        },
        {
          icon: carBen2,
          content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
        },
        {
          icon: carBen3,
          content: "Hỗ trợ cứu hộ 24/7",
        },
      ],
    link : "/buyInsurance"
  },
  {
    name: "Bảo hiểm Du lịch Quốc tế",
    icon: DomesticIcon,
    type: DOMESTIC,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
      benefit: [
        {
          icon: carBen1,
          content: "Hệ thống gara xe bảo hành trên toàn quốc",
        },
        {
          icon: carBen2,
          content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
        },
        {
          icon: carBen3,
          content: "Hỗ trợ cứu hộ 24/7",
        },
      ],
    link : "/buyInsurance"
  },
];
export const checkUndefineImage = (image:string) => image !== undefined ? image : ''
const pathHiddenHeader = [
  PATH_HOME
]
export const isHiddenHeader = (path:string) => {
  return pathHiddenHeader.every(_path => _path === path) ? 'hidden' : 'flex'
}
export const isShowInput = () => {
  return async (dispatch:any, getState:any) => {
    return getState() 
  }
}
export const stepArray:number[] = [1,2,3]
export const INPUT_NUMBER_TYPE:string = 'number'
export const INPUT_SELECT_TYPE:string = 'select'
export const INPUT_STRING_TYPE:string = 'string'
export const INPUT_UPLOAD_IMAGE:string = 'upload'
export const INPUT_CURRENCY_NUMBER:string = 'currency'
export const INPUT_DATE_TYPE:string = 'date'
export const APPLY:string = 'Áp dụng'
export const SELECT_PACKAGE:string = 'Chọn gói này'
export const BUY_ONLINE:string = 'Mua trực tuyến'
export const COUNTINUE:string = 'Tiếp tục'
export const AGREE:string = 'Đồng ý'
export const BUY_NOW:string = 'Mua ngay'
export const isObjectEmpty = (object:object = {}) => {
  return _.isEmpty(object);
}

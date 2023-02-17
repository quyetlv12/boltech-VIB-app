import CarIcon from "../assests/products/car.png";
import CarTNDSIcon from "../assests/products/CarTNDS.png";
import HeathcareSIcon from "../assests/products/heathCare.png";
import DomesticIcon from "../assests/products/domestic.png";
import carLogo from "../assests/banner/car.png";

import HomeIcon from "../assests/products/home.png";
import { AppDispatch, RootState } from "store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const API_TIME_OUT = 10000;
export const CAR = "car";
export const CARTNDS = "carTnds";
export const HOME = "home";
export const HEATH_CARE = "heathCare";
export const DOMESTIC = "domestic";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const PRODUCTS = [
  {
    name: "Bảo hiểm Xe Ôtô",
    icon: CarIcon,
    type: CAR,
    slogan:
      "Bảo vệ tối ưu cho xe ô tô của bạn khỏi những thiệt hại vật chất do thiên tai, tai nạn bất ngờ không lường trước được, giúp bạn an tâm trên mọi nẻo đường",
    benefit: [
      {
        icon: "",
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: "",
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: "",
        content: "Hỗ trợ cứu hộ 24/7",
      },
    ],
    link : "/buyInsurance",
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
        icon: "",
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: "",
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: "",
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
        icon: "",
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: "",
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: "",
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
        icon: "",
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: "",
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: "",
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
        icon: "",
        content: "Hệ thống gara xe bảo hành trên toàn quốc",
      },
      {
        icon: "",
        content: "Dịch vụ giám định nhanh chóng, chính xác và thuận tiện",
      },
      {
        icon: "",
        content: "Hỗ trợ cứu hộ 24/7",
      },
    ],
    link : "/buyInsurance"
  },
];

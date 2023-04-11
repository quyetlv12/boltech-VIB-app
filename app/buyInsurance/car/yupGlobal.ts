import yup from "yupGlobal";
import { KEY_ADDONS, KEY_BRAND, KEY_CAR_TYPE, KEY_RESPONSIBILITY, KEY_SEATS, KEY_VALUE, KEY_YEAR } from "./step/utility";



export const validate = yup.object().shape({
  [KEY_CAR_TYPE]: yup
    .string()
    .required('Required'),
  [KEY_BRAND]: yup
    .string()
    .required('Required'),
  [KEY_SEATS]: yup
    .string()
    .required('Required'),
  [KEY_VALUE]: yup
    .string()
    .required('Required'),
  [KEY_RESPONSIBILITY]: yup
    .string()
    .required('Required'),
  [KEY_ADDONS]: yup
    .string()
    .required('Required'),
  [KEY_YEAR]: yup
    .string()
    .required('Required'),
})
import {
  INPUT_CURRENCY_NUMBER,
  INPUT_DATE_TYPE,
  INPUT_NUMBER_TYPE,
  INPUT_SELECT_TYPE,
  INPUT_STRING_TYPE,
  INPUT_UPLOAD_IMAGE,
  isObjectEmpty,
  useAppDispatch,
  useAppSelector
} from "@constants";
import { INPUT_DATA } from "interfaces/insurances";
import { FC, useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import CurrencyInput from "react-currency-input-field";
import { getBrands, getCarTypes, getInputData, getInputStatus, getStep1Data, turnOffInput } from "store/buyInsurance";
import styled from "styled-components";
import DatePicker from "./DatePicker";
import Select from "./Select";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import { KEY_BRAND, KEY_CAR_TYPE, KEY_SEATS } from "app/buyInsurance/car/step/utility";
interface Props {
  value?: number | undefined;
  placeholder?: string;
  setValue?: any,
  getValues?: any
}
const InputStyled = styled.div`
  input {
    width: 100%;
    height: 70px;
    padding: 2%;
    border-radius: 10px;
    padding-top: 8%;
  }
  .placeholder__input {
    position: absolute;
    top: 10%;
    padding: 0 2%;
  }
`;
const CurrencyInputCpn: FC<Props> = ({ value, placeholder, setValue, getValues }) => {
  const inputStatus = useAppSelector(getInputStatus);
  const inputData: INPUT_DATA = useAppSelector(getInputData);
  const car_types = useAppSelector(getCarTypes);
  const car_brands = useAppSelector(getBrands);
  const dispatch = useAppDispatch()
  const {
    key_form, typeInput, content
  } = inputData
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('')

  const onChangeValue = (value: any) => {
    setInputValue(value)
  }
  const getArrayListSelect = (key: string) => {
    let _arr: [] = []
    switch (key) {
      case KEY_CAR_TYPE:
        _arr = car_types
        break;
      case KEY_BRAND:
        _arr = car_brands
        break;
      default:
        break;
    }
    return _arr
  }  
  const RenderInput = () => {
    if (!isObjectEmpty(inputData)) {
      switch (inputData.typeInput) {
        case INPUT_NUMBER_TYPE:
          return (
            <div className="mt-4">
              <div className="relative mt-4">
                <span className="placeholder__input text-[12px] text-[#9DA3AE]">
                  Nhập {inputData.content}
                </span>
                <input type="tel" onChange={(e) => onChangeValue(e.target.value)} defaultValue={inputValue} />
              </div>
            </div>
          );
        case INPUT_STRING_TYPE:
          return (
            <div className="mt-4">
              <div className="relative mt-4">
                <span className="placeholder__input text-[12px] text-[#9DA3AE]">
                  Nhập {inputData.content}
                </span>
                <input type="string" onChange={(e) => onChangeValue(e.target.value)} defaultValue={inputValue}
                />
              </div>
            </div>
          );
        case INPUT_UPLOAD_IMAGE:
          return (
            <div className="mt-4">
              <div className="border-grey-200 text-center py-3 rounded-full border-[1px] border-[#333] mb-3">
                <label htmlFor="upload-image1">Chụp hình mới</label>
                <input type="file" id="upload-image1" className="hidden" accept="image/*" capture />
              </div>
              <div className="border-grey-200 text-center py-3 rounded-full border-[1px] border-[#333]">
                <label htmlFor="upload-image2">Hình trong thư viện</label>
                <input type="file" id="upload-image2" className="hidden" />
              </div>
            </div>
          );
        case INPUT_DATE_TYPE:
          return <DatePicker setValue={setValue} key_form={'year'} setInputValue={setInputValue}  inputValue={inputValue} getValues={getValues} />;
        case INPUT_SELECT_TYPE:
          return <Select arrList={getArrayListSelect(key_form)} getValues={getValues}  key_form={key_form} setValue={setValue}  setInputValue={setInputValue} />;
        case INPUT_CURRENCY_NUMBER:
          return (
            <div className="relative mt-4">
              <span className="placeholder__input text-[12px] text-[#9DA3AE]">
                Nhập {inputData.content}
              </span>
              <CurrencyInput
                id="input-number"
                name="input-name"
                placeholder={""}
                defaultValue={inputValue}
                decimalsLimit={2}
                className="shadow-lg"
                onValueChange={(value, name) => onChangeValue(value)}
                autoFocus={true}
              // ref={inputRef}
              />
            </div>
          );
        default:
          break;
      }
    }
  };
  const onClickSubmit = () => {
    setValue(key_form, inputValue)
    dispatch(turnOffInput())
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    setInputValue(getValues(key_form))
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputStatus])

  return (
    <InputStyled>
      <div>
        {/* ==========title========= */}
        {/* <span className="mb-3 font-semibold text-[20px] px-2">Nhập {inputData.content}</span> */}
        {/* =============input ======== */}
        <div className="px-2">
          {RenderInput()}
        </div>
        <div className="fixed bg-[#fff] bottom-[7%] w-full">
          <div className="px-2">
            <Button
              name={"Áp dụng"}
              type="button"
              className="w-full"
              // hiddenBtn={true}
              onClick={onClickSubmit}
            />
          </div>
        </div>
      </div>
    </InputStyled>
  );
};

export default CurrencyInputCpn;

import {
  INPUT_CURRENCY_NUMBER,
  INPUT_DATE_TYPE,
  INPUT_NUMBER_TYPE,
  INPUT_SELECT_TYPE,
  INPUT_STRING_TYPE,
  INPUT_UPLOAD_IMAGE,
  useAppSelector,
} from "@constants";
import React, { FC } from "react";
import CurrencyInput from "react-currency-input-field";
import { getInputData, getInputStatus } from "store/buyInsurance";
import styled from "styled-components";
import Button from "./Button";
import { INPUT_DATA } from "interfaces/insurances";
interface Props {
  value?: number | undefined;
  placeholder?: string;
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
const CurrencyInputCpn: FC<Props> = ({ value, placeholder }) => {
  const inputStatus = useAppSelector(getInputStatus);
  const inputData:INPUT_DATA = useAppSelector(getInputData);
  console.log("inputData" , inputData);
  
  const RenderInput = () => {
    switch (inputData.typeInput) {
      case INPUT_NUMBER_TYPE:
        return <div className="mt-4">
            <div className="relative mt-4">
            <span className="placeholder__input text-[12px] text-[#9DA3AE]">
              Nhập {inputData.content}
            </span>
            <input type="number" />
          </div>
        </div>;
      case INPUT_DATE_TYPE:
        return <div className="mt-4">123</div>;
      case INPUT_STRING_TYPE:
        return <div className="mt-4">
        <div className="relative mt-4">
        <span className="placeholder__input text-[12px] text-[#9DA3AE]">
          Nhập {inputData.content}
        </span>
        <input type="string" />
      </div>
    </div>;;
      case INPUT_UPLOAD_IMAGE:
        return <div className="mt-4">
          <div className="border-grey-200 text-center py-3 rounded-full border-[1px] border-[#333] mb-3">Chụp hình mới</div>
          <div className="border-grey-200 text-center py-3 rounded-full border-[1px] border-[#333]">Hình trong thư viện</div>
        </div>;
      case INPUT_SELECT_TYPE:
        return <div className="mt-4">123</div>;;
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
              defaultValue={value}
              decimalsLimit={2}
              className="shadow-lg"
              onValueChange={(value, name) => console.log(value, name)}
              autoFocus={true}
            />
          </div>
        );
      default:
        break;
    }
  };
  console.log("RenderInput" , RenderInput());
  
  return (
    <InputStyled className={`relative ${inputStatus ? "" : "hidden"} px-3`}>
      {/* ==========title========= */}
      {/* <span className="mb-3 font-semibold text-[20px]">Nhập {inputData.content}</span> */}
      {/* =============input ======== */}
      {RenderInput()}
    </InputStyled>
  );
};

export default CurrencyInputCpn;

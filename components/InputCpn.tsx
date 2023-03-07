import { useAppSelector } from "@constants";
import React, { FC } from "react";
import CurrencyInput from "react-currency-input-field";
import { getInputStatus } from "store/buyInsurance";
import styled from "styled-components";
import Button from "./Button";
interface Props {
  value: number | undefined;
  placeholder: string;
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
  return (
    <InputStyled className={`relative ${inputStatus ? "" : "hidden"} px-3`}>
      {/* ==========title========= */}
      <span className="mb-3 font-semibold text-[20px]">Nhập số tiền trách nhiệm</span>
      {/* =============input ======== */}
      <div className="relative mt-4">
        <span className="placeholder__input text-[12px] text-[#9DA3AE]">
          Mức trách nhiệm BH tai nạn người ngồi
        </span>
        <CurrencyInput
          id="input-number"
          name="input-name"
          placeholder={placeholder}
          defaultValue={value}
          decimalsLimit={2}
          className="shadow-lg"
          onValueChange={(value, name) => console.log(value, name)}
          autoFocus={true}
        />
      </div>
    </InputStyled>
  );
};

export default CurrencyInputCpn;

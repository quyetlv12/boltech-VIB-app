import { useAppDispatch, useAppSelector } from "@constants";
import { FC, useState } from "react";
import { getInputStatus, turnOnInput } from "store/buyInsurance";
import CurrencyInputCpn from "./InputNumber";
import { ROW_INFO } from "interfaces/insurances";
import Arrow from "assests/arrow.png";
import Image from "next/image";
interface Props {
  info: ROW_INFO[];
}
const RowInfo: FC<Props> = ({ info }) => {
  const inputStatus = useAppSelector(getInputStatus);
  console.log("inputStatus", inputStatus);
  const dispath = useAppDispatch();

  const handleInputValue = (fieldName: string) => {
    dispath(turnOnInput(fieldName));
    const input = document.querySelector(
      "#input-number"
    ) as HTMLInputElement | null;
    if (input !== null) {
      input.setAttribute("autoFocus", "autoFocus");
    }
  };
  return (
    <>
      <div className={`${inputStatus ? "hidden" : "block"}`}>
        {
          info.map((_elt , index) => {
            return (
              <div className="flex justify-between px-3 py-5 h-[50px] items-center bg-[#fff] shadow-[#F3F4F6]">
              <span>{_elt.content}</span>
              <div className="flex">
              <span onClick={() => handleInputValue(_elt.typeInput)}>nhập</span>
              <Image src={Arrow} alt="arrow" width={15} height={15} />
              </div>
            </div>
            )
          })
        }
      </div>
      <CurrencyInputCpn placeholder="Nhập giá trị" value={20000000} />
    </>
  );
};

export default RowInfo;

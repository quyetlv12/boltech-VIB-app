import CurrencyInputCpn from "@components/InputNumber";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { useState } from "react";
import { CUSTOM_FIELD } from "./utility";
import Image from "next/image";
import PjicoLogo from '../../../../assests/insurance/pjico-logo.png'
import Button from "@components/Button";
// import   from 'assests/arrow.png'

const Step1 = () => {  
  return (
    <>
    <div className="mb-3 py-5">
      <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
      <RowInfo info={CUSTOM_FIELD}/>
      <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
      <div className="px-[5%]">
        <div className="bg-[#fff] w-full rounded-md">
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px] py-[10px] flex items-center gap-5">
            <Image src={PjicoLogo} alt="logo pjico" width={50} />
            <div>
              <p>PJICO</p>
              <p className="text-[#F47920] font-semibold text-[15px]">1,500,000 đ/năm</p>
            </div>
          </div>
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px] py-[10px]">
            <Image src={PjicoLogo} alt="logo pjico" width={50} />
          </div>
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px] py-[10px]">
            <Image src={PjicoLogo} alt="logo pjico" width={50} />
          </div>
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px] py-[10px]">
            <Image src={PjicoLogo} alt="logo pjico" width={50} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center w-full px-[5%]"><Button name={'Chọn gói này'} className="w-full " /> </div>
    </>
  );
};

export default Step1;

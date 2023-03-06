import CurrencyInputCpn from "@components/InputNumber";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { useState } from "react";
import { CUSTOM_FIELD } from "./utility";
import Image from "next/image";
import PjicoLogo from '../../../../assests/insurance/pjico-logo.png'
import Button from "@components/Button";
import PackageSelect from "@components/PackageSelect";
// import   from 'assests/arrow.png'

const Step1 = () => {  
  return (
    <>
    <div className="mb-3 py-5">
      <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
      <RowInfo info={CUSTOM_FIELD}/>
      <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
      <PackageSelect />
    </div>
    <div className="flex justify-center w-full px-[5%]"><Button name={'Chọn gói này'} className="w-full " /> </div>
    </>
  );
};

export default Step1;

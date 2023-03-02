import CurrencyInputCpn from "@components/InputNumber";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { useState } from "react";
import { CUSTOM_FIELD } from "./utility";
// import   from 'assests/arrow.png'

const Step1 = () => {  
  return (
    <>
    <div className="mb-3 px-[5%] py-5">
      <Title title="Xe ôtô được bảo hiểm" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
      <RowInfo info={CUSTOM_FIELD}/>
    </div>
     
    </>
  );
};

export default Step1;

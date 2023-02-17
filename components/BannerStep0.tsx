import { CAR, PRODUCTS, useAppSelector } from "@constants";
import { PRODUCT } from "interfaces/insurances";
import React, { FC } from "react";
import Button from "./Button";
import Link from "next/link";
import { getStep0data, getTypeInsurance } from "store/buyInsurance";
import Bannermain from "../assests/banner/banner-main.png";
import Image from "next/image";
interface Props {
  type: string;
}
const BannerStep0: FC<Props> = ({ type }) => {
  const typeInsurance = useAppSelector(getTypeInsurance);
  const step0data = useAppSelector(getStep0data);
  console.log("step0data", step0data);

  return (
    <div>
      <div className="relative">
        <span className="absolute text-xl top-[50%] text-[#fff] left-[5%]">{step0data.name}</span>
        <div className="flex justify-end ">
          <Image
            src={step0data.logo}
            className="w-[30%] absolute top-[30%] right-[5%]"
            alt="banner main"
          />
        </div>
        <Image src={Bannermain} className="w-full" alt="banner main" />
      </div>
      <div className="font-medium text-[22px] px-[5%]">Quyền lợi bảo hiểm</div>
      <div className="px-[5%]">
        <Link href={`buyInsurance/${typeInsurance}`}>
          <Button name={"Mua trực tuyến"} className="w-full mt-3" />
        </Link>
      </div>
    </div>
  );
};

export default BannerStep0;

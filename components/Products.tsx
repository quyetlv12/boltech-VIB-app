import { PRODUCT } from "interfaces/insurances";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import ArrowRight from "../assests/arrowRight.png";
import { NextResponse } from "next/server";
import Link from "next/link";
import { useAppDispatch } from "@constants";
import { selectInsuraneBuy } from "store/buyInsurance";
interface Props {
  products?: PRODUCT[];
  clasName?: string;
}
const Products: FC<Props> = ({ products = [], clasName = "" }) => {
  const dispatch = useAppDispatch()
  const handleBuyInsurance = (type:any) => {
    const step0Data:any = products.find(_elt => _elt.type === type) || {}    
    dispatch(selectInsuraneBuy(step0Data))
  }
  return (
    <div className={clasName}>
      {products.map((_elt, index) => {
        const { name, icon , type , link } = _elt;
        return (
          <Link
          key={index}
          href={link}
            className={`flex mb-4 justify-between items-center h-[60px] bg-[#fff] rounded-[10px] shadow-lg hover:bg-[#faddb9]`}
            onClick={() => handleBuyInsurance(type)}
          >
            <div className="w-1/5 flex justify-center">
              <Image src={icon} width={30} height={30} alt={"logo insurance"} />
            </div>
            <div className="text-left w-3/5 font-medium text-[15px]">
              {name}
            </div>
            <div className="w-1/5 flex justify-end mr-[7%]">
              <Image
                src={ArrowRight}
                width={10}
                height={10}
                alt={"logo insurance"}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;

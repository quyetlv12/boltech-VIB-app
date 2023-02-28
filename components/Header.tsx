"use client"
import { isHiddenHeader, useAppSelector } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FC } from "react";
import ArrowActive from "../assests/header/arrow-active.png";
import ArrowNotActive from "../assests/header/arrow-not-active.png";
import Close from "../assests/header/close.png";
import Reload from "../assests/header/reload.png";
import { getStep0data } from "store/buyInsurance";
import ProcessBuyInsurance from "./ProcessBuyInsurance";
interface Props {
}
const Header:FC<Props> = () => {
  const pathName:string = usePathname() || '/'
  const step0data = useAppSelector(getStep0data);
  console.log("step0data" , step0data);
  
  return (
   <>
    <div className={`h-[50px] items-center justify-between px-3 bg-[#fff] ${isHiddenHeader(pathName)}`}>
      <button className="">
        <Link href={'/'}>
          <Image src={Close} alt="close app" className="w-[35px] h-[35px]" />
        </Link>
      </button>
      <div>
        <Link href={"/"}>
          <Image
            src={ArrowActive}
            alt="close app"
            className="w-[35px] h-[35px]"
          />
        </Link>
      </div>
      <span className="font-medium text-[16px]">{step0data?.name}</span>
      <div>
        <Image src={ArrowNotActive} alt="next" className="w-[35px] h-[35px]" />
      </div>
      <div>
        <Image src={Reload} alt="reload app" className="w-[35px] h-[35px]" />
      </div>
    </div>
    <ProcessBuyInsurance />
   </>
  );
};

export default Header;

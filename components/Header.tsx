"use client";
import { isHiddenHeader, isShowInput, useAppDispatch, useAppSelector } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import ArrowActive from "../assests/header/arrow-active.png";
import ArrowNotActive from "../assests/header/arrow-not-active.png";
import Close from "../assests/header/close.png";
import Reload from "../assests/header/reload.png";
import {
  backStep,
  getInputData,
  getInputStatus,
  getStep,
  getStep0data,
  nextStep,
  turnOffInput,
} from "store/buyInsurance";
import ProcessBuyInsurance from "./ProcessBuyInsurance";
interface Props {}
const Header: FC<Props> = () => {
  const pathName: string = usePathname() || "/";
  const router = useRouter();
  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const step0data = useAppSelector(getStep0data);
  const inputStatus = useAppSelector(getInputStatus);
  const inputData = useAppSelector(getInputData);
  const handleBack = () => {
    if (step > 0) {
      dispatch(backStep());
      return;
    } else if (step === 1) {
      router.push("/buyInsurance");
    }
    router.back();
  };
  const handleReload = () => {
    router.refresh();
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  
  return (
    <>
      {inputStatus ? (
        <div
          className={`h-[50px] flex-col fixed top-0 z-40 w-full bg-[#fff] ${isHiddenHeader(
            pathName
          )}`}
        >
          <div className="flex items-center h-[50px] gap-10 justify-center">
            <span className="font-medium text-[16px]">{inputData.content}</span>
            <button
              className="absolute right-[2%]"
              onClick={() => dispatch(turnOffInput())}
            >
              <Image
                src={Close}
                alt="close app"
                className="w-[35px] h-[35px]"
              />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`h-[50px] flex-col fixed top-0 z-40 w-full  bg-[#fff] ${isHiddenHeader(
            pathName
          )}`}
        >
          <div className="flex items-center justify-between w-full px-3 h-[50px]">
            <button className="">
              <Link href={"/"}>
                <Image
                  src={Close}
                  alt="close app"
                  className="w-[35px] h-[35px]"
                />
              </Link>
            </button>
            <div>
              <div onClick={handleBack}>
                <Image
                  src={ArrowActive}
                  alt="close app"
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
            <span className="font-medium text-[16px]">{step0data?.name}</span>
            <div onClick={handleNext}>
              <Image
                src={ArrowNotActive}
                alt="next"
                className="w-[35px] h-[35px]"
              />
            </div>
            <div onClick={handleReload}>
              <Image
                src={Reload}
                alt="reload app"
                className="w-[35px] h-[35px]"
              />
            </div>
          </div>
          <ProcessBuyInsurance />
        </div>
      )}
    </>
  );
};

export default Header;

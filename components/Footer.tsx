import { FC, useEffect, useState } from "react";
import React from "react";
import Logo from "../assests/logo.png";
import Image from "next/image";
import {
  APPLY,
  BUY_NOW,
  BUY_ONLINE,
  COUNTINUE,
  SELECT_PACKAGE,
  TEXT_FOOTER_COLOR,
  useAppDispatch,
  useAppSelector,
} from "@constants";
import Button from "./Button";
import { getInputStatus, getStep, nextStep } from "store/buyInsurance";
import { usePathname } from "next/navigation";
import Title from "./Title";
interface Props {}
const Footer: FC<Props> = () => {
  const [textBtnFooter, setTextBtnFooter] = useState("Button here");
  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const inputStatus = useAppSelector(getInputStatus);
  const pathName = usePathname();
  const handleNextStep = (): void => {
    dispatch(nextStep());
  };
  const depenc = [pathName, step, inputStatus];

  useEffect(() => {
    // check text in button
    if (step === 0 && !inputStatus) {
      setTextBtnFooter(BUY_ONLINE);
    } else if (step === 1 && !inputStatus) {
      setTextBtnFooter(SELECT_PACKAGE);
    } else if (inputStatus) {
      setTextBtnFooter(APPLY);
    } else if (step === 2) {
      setTextBtnFooter(COUNTINUE);
    } else if (step === 3 && !inputStatus) {
      setTextBtnFooter(BUY_NOW);
    }
  }, [depenc]);

  return (
    <div className={`w-full py-[5px] footer__main ${inputStatus ? 'fixed bg-[#fff] bottom-0' : '' }`}>
      <div className="flex justify-center w-full px-[5%]">
        <Button
          name={textBtnFooter}
          className="w-full"
          hiddenBtn={true}
          onClick={handleNextStep}
        />{" "}
      </div>
      {step === 3 && (
        <Title
          title="Chúng tôi không thu bất kỳ khoản phí thanh toán nào!"
          className="mt-3 text-center"
          size="13"
        />
      )}
      <p className={`text-[${TEXT_FOOTER_COLOR}] text-[12px] text-center mt-3`}>
        Hotline: +84 244 4582 274
      </p>
    </div>
  );
};

export default Footer;

"use client";

import { useAppDispatch, useAppSelector } from "@constants";
import { getStep, turnOffInput } from "store/buyInsurance";
import Step1 from "./step/step1";
import Step2 from "./step/step2";
import Step3 from "./step/step3";
import BannerStep0 from "@components/BannerStep0";
import BuyInsuranceStep from "@components/BuyInsuranceStep";
import { useEffect } from "react";
import ProcessBuyInsurance from "@components/ProcessBuyInsurance";

const BuyCarInsurance = () => {
  const step = useAppSelector(getStep);
  const dispatch = useAppDispatch()
  const renderSceen = () => {
    switch (step) {
      case 0:
        return <BuyInsuranceStep />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(turnOffInput())
  }, [])
  
  return <div>
    {renderSceen()}</div>;
};

export default BuyCarInsurance;

"use client";

import BannerStep0 from "@components/BannerStep0";
import Footer from "@components/Footer";
import CurrencyInputCpn from "@components/InputCpn";
import { useAppDispatch, useAppSelector } from "@constants";
import { useEffect } from "react";
import { getInputStatus, getStep, turnOffInput } from "store/buyInsurance";
import Step1 from "./step/step1";
import Step2 from "./step/step2";
import Step3 from "./step/step3";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  carName: string,
  exampleRequired: string,
};
const BuyCarInsurance = () => {
  const step = useAppSelector(getStep);
  const inputStatus = useAppSelector(getInputStatus)
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch , setValue , getValues, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }
  const renderSceen = () => {
    switch (step) {
      case 0:
        return <BannerStep0 />;
      case 1:
        return <Step1 register={register} getValues={getValues} />;
      case 2:
        return <Step2 register={register} getValues={getValues}/>;
      case 3:
        return <Step3 register={register} getValues={getValues}/>;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(turnOffInput());
  }, []);

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
      {!inputStatus ? renderSceen() : <CurrencyInputCpn setValue={setValue} getValues={getValues} />}
      </form>
      <Footer />
    </main>
  );
};

export default BuyCarInsurance;

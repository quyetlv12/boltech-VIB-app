"use client";
import BannerStep0 from "@components/BannerStep0";
import Footer from "@components/Footer";
import CurrencyInputCpn from "@components/InputCpn";
import { KEY_CONTRACT_ID, KEY_CONTRACT_INFO, KEY_STEP, KEY_STEP_1, KEY_VEHICELS, useAppDispatch, useAppSelector } from "@constants";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createContractService, updateContractService } from "services/buyCarInsurance";
import { getContractId, getInputStatus, getStep, nextStep, turnOffInput, updateProps } from "store/buyInsurance";
import Step1 from "./step/step1";
import Step2 from "./step/step2";
import Step3 from "./step/step3";
import { getObjectContract } from "./step/utility";
import { _defaultValue, validate } from './yupGlobal';
import { STEP_1_DATA_PROPS } from "interfaces/insurances";
const BuyCarInsurance = () => {
  //GET DATA FROM REDUX
  const step = useAppSelector(getStep);  
  const dispatch = useAppDispatch();

  const renderSceen = () => {
    switch (step) {
      case 0:
        return <BannerStep0 />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2/>;
      case 3:
        return <Step3/>;
      default:
        return <Step1 />;
    }
  };
  useEffect(() => {
    dispatch(turnOffInput());
    //fill value redux to hook form
    // if (condition) {

    // }
  }, []);
  return (
    <main>
      <div>
        {
          renderSceen()
        }
      </div>
      <Footer />
    </main>
  );
};

export default BuyCarInsurance;

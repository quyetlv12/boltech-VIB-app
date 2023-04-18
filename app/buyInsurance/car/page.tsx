"use client";
import BannerStep0 from "@components/BannerStep0";
import Footer from "@components/Footer";
import { useAppDispatch, useAppSelector } from "@constants";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { getStep, turnOffInput } from "store/buyInsurance";
import Step1 from "./step/step1";
import Step2 from "./step/step2";
import Step3 from "./step/step3";
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

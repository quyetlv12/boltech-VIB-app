import { stepArray, useAppSelector } from "@constants";
import { getMaxStep, getStep } from "store/buyInsurance";

const ProcessBuyInsurance = () => {
  const step = useAppSelector(getStep);
  const maxStep = useAppSelector(getMaxStep);
  return (
    <>
      <div className={`z-50 bg-[#fff] absolute bottom-0  h-[5px] w-full transition-all duration-200 ${step > 0 ?'flex' : 'hidden'}`}>
        {stepArray.map((_elt, index) => (
          <div
          key={index}
            className={`bg-[${
              step >= _elt ? "#000" : "#fff"
            }] h-[5px] w-1/${maxStep}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ProcessBuyInsurance;

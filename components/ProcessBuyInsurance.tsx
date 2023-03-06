import { stepArray, useAppSelector } from "@constants";
import { getMaxStep, getStep } from "store/buyInsurance";

const ProcessBuyInsurance = () => {
  const step = useAppSelector(getStep);
  const maxStep = useAppSelector(getMaxStep);  
  return (
    <div className="px-3 py-1">
      <div className={`bg-[#E5E7EB] rounded-md h-[5px] w-full transition-all border-0 outline-0 duration-200 ${step > 0 ? 'flex' : 'hidden'}`}>
        {stepArray.map((_elt, index) => (
          
          <div
          key={index}
            className={`bg-[${
              step >= _elt ? "#000" : "#fff"
            }] h-[5px] w-1/3`}
          >
           
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProcessBuyInsurance;

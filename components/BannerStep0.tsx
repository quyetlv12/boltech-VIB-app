import { useAppDispatch, useAppSelector } from "@constants";
import { BENEFIT } from "interfaces/insurances";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { getStep0data, getTypeInsurance, nextStep } from "store/buyInsurance";
import Bannermain from "../assests/banner/banner-main.png";
import Button from "./Button";
import Footer from "./Footer";
interface Props {
}
const BannerStep0: FC<Props> = () => {
  const step0data = useAppSelector(getStep0data);
  const type = useAppSelector(getTypeInsurance);  

  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleClickBuyInsurance = () =>{
    dispatch(nextStep())    
  }
  
  return (
    <div>
      <div className="relative">
        <span className="absolute text-xl top-[50%] text-[#fff] left-[5%]">{step0data.name}</span>
        <div className="flex justify-end ">
          <Image
            src={step0data.logo}
            className="w-[30%] absolute top-[30%] right-[5%]"
            alt="banner main"
          />
        </div>
        <Image src={Bannermain} className="w-full" alt="banner main" />
      </div>

      <div className="font-medium text-[22px] px-[5%] mb-4">
        <span className="text-[15px]">{step0data.slogan}</span>
      </div>
      <div className="font-bold text-[22px] px-[5%]">Quyền lợi bảo hiểm</div>
      <div className="text-[15px] px-[5%] mt-3 bg-[#fbf2ee] py-5">
        {
          step0data.benefit && step0data.benefit.map((_elt:BENEFIT , index:number) => {
            return (
              <div key={index} className="flex mb-3 h-[50px]"> 
                <div className={`${index === 1 ? 'w-[50px]' : 'w-[35px]'} flex items-center`}>
                  <Image src={_elt.icon !== undefined ? _elt.icon : ''} alt='image 1' className={`mb-5 mt-4`} /> 
                </div>
                <span className={`text-[16px] ml-5 h-[50px] flex items-center font-normal`}>
                  {_elt?.content}
                </span>
              </div>
            )
          })
        }
      </div>
      <div className="px-[5%]">
      <Button name={"Mua trực tuyến"} onClick={handleClickBuyInsurance} className="w-full mt-3" />
      </div>
    </div>
  );
};

export default BannerStep0;

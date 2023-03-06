import Image from "next/image";
import React from "react";
import PjicoLogo from "../assests/insurance/pjico-logo.png";
const PackageSelect = () => {
  return (
    <div className="px-[5%]">
      <div className="bg-[#fff] w-full rounded-md">
        <div className="border-b-[1px] border-[#F3F4F6] px-[20px] py-[10px] flex items-center gap-5">
          <Image src={PjicoLogo} alt="logo pjico" width={50} />
          <div>
            <p>PJICO</p>
            <p className="text-[#F47920] font-semibold text-[15px]">
              1,500,000 đ/năm
            </p>
          </div>
        </div>
        <div className="border-b-[1px] text-[15px] flex justify-between border-[#F3F4F6] px-[20px] py-[10px]">
          <span className=" text-[#4D5562] w-3/4">Bảo hiểm bắt buộc TNDS</span>
          <span className="font-medium w-1/4 text-right">Không</span>
        </div>
        <div className="border-b-[1px] text-[15px] flex justify-between border-[#F3F4F6] px-[20px] py-[10px]">
          <span className=" text-[#4D5562] w-3/4">
            Bảo hiểm tai nạn người ngồi trên xe
          </span>
          <span className="font-medium w-1/4 text-right">Không</span>
        </div>
        <div className="border-b-[1px] text-[15px] flex justify-between border-[#F3F4F6] px-[20px] py-[10px]">
          <span className=" text-[#4D5562] w-3/4">Giá trị bảo hiểm vật chất xe</span>
          <span className="font-medium w-1/4 text-right">Không</span>
        </div>
      </div>
    </div>
  );
};

export default PackageSelect;

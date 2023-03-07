import { useAppSelector } from "@constants";
import React, { FC } from "react";
import { getInputStatus } from "store/buyInsurance";

interface Props {
  title: string;
  subTitle?: string;
  className?: string;
  size?: string;
}
const Title: FC<Props> = ({ title, subTitle, className, size = "22" }) => {
  const inputStatus = useAppSelector(getInputStatus);

  return (
    <div className={`px-3 ${className} ${!inputStatus ? "" : "hidden"}`}>
      <h2 className={`font-bold text-[${size}px]`}>{title}</h2>
      {subTitle && (
        <p className={`text-[#6C727F] text-[17px] font-normal`}>
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;

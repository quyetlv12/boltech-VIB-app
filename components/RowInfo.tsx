import { INPUT_UPLOAD_IMAGE, useAppDispatch, useAppSelector } from "@constants";
import Arrow from "assests/arrow.png";
import { INPUT_DATA, ROW_INFO } from "interfaces/insurances";
import Image from "next/image";
import { FC } from "react";
import { getInputStatus, turnOnInput } from "store/buyInsurance";
import PjicoLogo from "../assests/insurance/pjico-logo.png";

interface Props {
  info: ROW_INFO[];
  className?: string;
  logo?: boolean;
}
const RowInfo: FC<Props> = ({ info, className, logo = false }) => {
  const inputStatus = useAppSelector(getInputStatus);
  const dispath = useAppDispatch();

  const handleInputValue = (object: INPUT_DATA) => {
    dispath(turnOnInput(object));
    const input = document.querySelector(
      "#input-number"
    ) as HTMLInputElement | null;
    if (input !== null) {
      input.setAttribute("autoFocus", "autoFocus");
    }
  };
  return (
    <>
      <div className={`${inputStatus ? "hidden" : "block"} ${className}`}>
        {logo && (
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px]  bg-[#fff] py-[10px] flex items-center gap-5">
            <Image src={PjicoLogo} alt="logo pjico" width={50} />
            <div>
              <p>PJICO</p>
              <span className="text-[#F47920] font-semibold text-[15px]">
                1,500,000 đ
              </span>
              <span className="text-[#6C727F]">/năm</span>
            </div>
          </div>
        )}

        {info.map((_elt: INPUT_DATA, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between px-3 h-[70px] border-b-[1px] border-[#F3F4F6] items-center bg-[#fff] shadow-md shadow-[#F3F4F6]"
            >
              <span
                className={`w-2/4 text-[15px] capitalize ${
                  _elt.typeInput === INPUT_UPLOAD_IMAGE && "font-normal"
                }`}
              >
                {_elt.content}
              </span>
              <div className="flex items-center gap-3 w-1/4 justify-end">
                {_elt.typeInput !== INPUT_UPLOAD_IMAGE ? (
                  <span
                    className="font-semibold"
                    onClick={() => handleInputValue(_elt)}
                  >
                    Nhập
                  </span>
                ) : (
                  <div className="flex gap-5">
                    {_elt.iconArr?.map((__elt: any, index: number) => (
                      <div
                        className="rounded-md border border-[#C4C4C4] h-[50px] w-[50px]"
                        key={index}
                      >
                        <Image
                          src={__elt}
                          alt={"upload image"}
                          width={200}
                          key={index}
                          onClick={() => handleInputValue(_elt)}
                        />{" "}
                      </div>
                    ))}
                  </div>
                )}

                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RowInfo;

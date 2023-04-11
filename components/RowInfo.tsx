import { INPUT_UPLOAD_IMAGE, useAppDispatch, useAppSelector } from "@constants";
import Arrow from "assests/arrow.png";
import { ICON_OBJ, INPUT_DATA, ROW_INFO } from "interfaces/insurances";
import Image from "next/image";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { getInputStatus, getStep0data, turnOnInput } from "store/buyInsurance";

interface Props {
  info: ROW_INFO[];
  className?: string;
  logo?: boolean;
  register?: any;
  getValues?: any,
  errors: any
  control?: any
}
const RowInfo: FC<Props> = ({ info, className, logo = false, register, getValues, errors, control }) => {
  console.log("errors" ,errors);
  
  const step0data = useAppSelector(getStep0data)
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
        {/* LIST COMPANY INSURANCE */}
        {logo && (
          <div className="border-b-[1px] border-[#F3F4F6] px-[20px]  bg-[#fff] py-[10px] flex items-center gap-5">
            <Image src={step0data.icon} alt="logo pjico" width={40} />
            <div>
              <p>PJICO</p>
              <span className="text-[#F47920] font-semibold text-[15px]">
                1,500,000 đ
              </span>
              <span className="text-[#6C727F]">/năm</span>
            </div>
          </div>
        )}



        {/* LIST ROW FILED */}
        {info.map((_elt: INPUT_DATA, index: number) => {
          const _isError = errors[_elt.key_form] ? 'border-[#ff0000] border-[1px]' : 'border-b-[1px] border-[#F3F4F6]'
          return (
            <Controller
              name={_elt.key_form}
              control={control}
              key={index}
              render={({ field }) =>
                <>
                  <div
                    className={`flex justify-between px-3 h-[70px]  items-center shadow-md shadow-[#F3F4F6] ${_isError}`}
                  >
                    <div
                      className={`w-2/4 text-[15px] capitalize ${_elt.typeInput === INPUT_UPLOAD_IMAGE && "font-normal"
                        }`}
                      {...register(_elt.key_form)}
                    >
                      {_elt.content}
                    </div>
                    <div className="flex items-center gap-3 w-2/4 justify-end">
                      {_elt.typeInput !== INPUT_UPLOAD_IMAGE ? (
                        <span
                          className="font-semibold"
                          onClick={() => handleInputValue(_elt)}
                        >
                          {
                            getValues(_elt.key_form) ? getValues(_elt.key_form) : 'Nhập'
                          }

                        </span>
                      ) : (
                        <div className="flex gap-5">
                          {_elt.iconArr?.map((__elt: ICON_OBJ, index: number) => (
                            <div
                              className="rounded-md border border-[#C4C4C4] h-[50px] w-[50px]"
                              key={index}
                            >
                              <Image
                                src={__elt?.icon ? __elt?.icon : ''}
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
                  </div></>
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default RowInfo;

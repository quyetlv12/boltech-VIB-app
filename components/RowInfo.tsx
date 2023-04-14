import { INPUT_SELECT_TYPE, INPUT_UPLOAD_IMAGE, useAppDispatch, useAppSelector } from "@constants";
import Arrow from "assests/arrow.png";
import { ICON_OBJ, INPUT_DATA, ROW_INFO } from "interfaces/insurances";
import Image from "next/image";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { getInputStatus, getStep0data, turnOnInput } from "store/buyInsurance";

interface Props {
  info: ROW_INFO[];
  className?: string;
  logo?: boolean;
  register?: Function;
  getValues?: any;
  errors: any;
  control?: any;
  watchAllField?: object | undefined | any;
}
const RowInfo: FC<Props> = ({ info, className, logo = false, getValues, errors, watchAllField , }) => {

  const step0data = useAppSelector(getStep0data)
  const inputStatus = useAppSelector(getInputStatus);
  const dispath = useAppDispatch();
  // auto focus input when open 
  const handleInputValue = (object: INPUT_DATA) => {
    dispath(turnOnInput(object));
    const input = document.querySelector(
      "#input-number"
    ) as HTMLInputElement | null;
    if (input !== null) {
      input.setAttribute("autoFocus", "autoFocus");
    }
  };
  // check content
  const getContentField = (original: INPUT_DATA): string => {
    let _text = 'Nhập'
    if (getValues(original.key_form)) {
      if (original.typeInput !== INPUT_SELECT_TYPE && original.isShowSelectText === undefined) {
        _text = watchAllField[original.key_form]
      }
      else if (original.typeInput === INPUT_SELECT_TYPE && original.isShowSelectText) {
        _text = '1 ' + "Lựa chọn"
      }
      else if (original.typeInput === INPUT_SELECT_TYPE && !original.isShowSelectText) {
        _text = watchAllField[original.key_form]
      }
    }
    return _text
  }
  return (
    <>
      <div className={`${inputStatus ? "hidden" : "block"} ${className} px-3`}>
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
          // check field empty
          const _isError = errors[_elt.key_form]  ? 'border-[#ff0000] border-[1px]'  : 'border-b-[1px] border-[#F3F4F6]' 
          return (
            <>
              <div
                className={`flex justify-between px-3 h-[70px] cursor-pointer  items-center shadow-md rounded-md shadow-[#F3F4F6] ${_isError} mb-2`}
              >
                <div
                  className={`w-2/4 text-[15px] capitalize ${_elt.typeInput === INPUT_UPLOAD_IMAGE && "font-normal"
                    }`}
                >
                  {_elt.content}
                </div>
                <div className="flex items-center gap-3 w-2/4 justify-end">
                  {_elt.typeInput !== INPUT_UPLOAD_IMAGE ? (
                    <span
                      className="font-semibold"
                      onClick={() => handleInputValue(_elt)}
                    >
                      {getContentField(_elt)}
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
          );
        })}
      </div>
    </>
  );
};

export default RowInfo;

import {useEffect} from 'react'
import PackageSelect from "@components/PackageSelect";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD } from "./utility";
import Button from "@components/Button";
import { FC } from "react";
import { useAppDispatch } from './../../../../constants/index';
import { useCarType } from 'utills/buyCarInsurance';
type Inputs = {
  carName: string,
  exampleRequired: string,
};
interface Props {
  register : any ,
  getValues : any,
  errors : any,
  control : any
}
const Step1:FC<Props> = ({register , getValues , errors , control}) => {
  console.log("errors" , errors);
  
  const dispatch = useAppDispatch()
  const { status, data, error, isFetching } = useCarType(dispatch);  
  return (
    <>
      <div>
        <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
        <div>
          <RowInfo info={CUSTOM_FIELD} register={register} getValues={getValues} errors={errors} control={control} />
          <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
          <PackageSelect />
          <div className="px-3 mt-3">
            <Button
              name={"Tiếp tục"}
              className="w-full"
              type={'submit'}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Step1;

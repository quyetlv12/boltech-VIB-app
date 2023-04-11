import PackageSelect from "@components/PackageSelect";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import {
  CUSTOM_FIELD_STEP_3_1,
  CUSTOM_FIELD_STEP_3_2,
  CUSTOM_FIELD_STEP_3_3,
  CUSTOM_FIELD_STEP_3_4,
  CUSTOM_FIELD_STEP_3_5,
} from "./utility";
import { FC } from "react";
interface Props {
  register : any ,
  getValues : any,
  errors : any ,
  control : any
}
const Step3:FC<Props> = ({register , getValues , errors , control}) => {
  return (
    <div>
      <Title
        title="Xác nhận thông tin"
        subTitle="Thông tin này được sử dụng để liên hệ và gửi Hợp đồng bảo hiểm"
        className="mb-3"
      />
      <Title title="Thông tin bảo hiểm" size="16" className="mt-3 mb-3" />
      <RowInfo info={CUSTOM_FIELD_STEP_3_1} logo={true} register={register} getValues={getValues}  errors={errors} control={control} />
      <Title
        title="Thông tin người mua (trên 18 tuổi)"
        size="16"
        className="mt-3 mb-3"
      />
      <RowInfo info={CUSTOM_FIELD_STEP_3_2} register={register} getValues={getValues}  errors={errors}  control={control} />
      <Title title="Thông tin nhận dạng" size="16" className="mt-3 mb-3" />
      <RowInfo info={CUSTOM_FIELD_STEP_3_3} register={register} getValues={getValues}  errors={errors}  control={control} />
      <Title title="Thông tin liên lạc" size="16" className="mt-3 mb-3" />{" "}
      <RowInfo info={CUSTOM_FIELD_STEP_3_4} register={register} getValues={getValues} errors={errors}  control={control}/>
      <Title title="Địa chỉ liên hệ" size="16" className="mt-3 mb-3" />
      <RowInfo info={CUSTOM_FIELD_STEP_3_5} register={register} getValues={getValues}  errors={errors}  control={control} />
    </div>
  );
};

export default Step3;

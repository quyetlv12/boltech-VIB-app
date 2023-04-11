import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD, CUSTOM_FIELD_STEP_2_1, CUSTOM_FIELD_STEP_2_2, CUSTOM_FIELD_STEP_2_3, CUSTOM_FIELD_STEP_2_4, CUSTOM_FIELD_STEP_2_5 } from "./utility";
import { FC } from "react";
interface Props {
  register : any ,
  getValues : any
}
const Step2:FC<Props> = ({register , getValues}) => {
  return (
    <div>
      <div>
        <Title
          title="Xe ôtô được bảo hiểm"
          subTitle="Vui lòng điền thông tin chính xác"
          className="mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_1} register={register} getValues={getValues} />
        <Title
          title="Thông tin xe bổ sung"
          size="16"
          className="mt-3 mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_2} register={register} getValues={getValues} />
        <RowInfo info={CUSTOM_FIELD_STEP_2_3} className="mt-[30px]" register={register} getValues={getValues} />
        <Title
          title="Hình ảnh & giấy tờ xe"
          className="mt-3 mb-2"
        />
        <Title
          title="Giấy tờ xe"
          size="16"
          className="mt-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_4} className="mt-[30px]" register={register} getValues={getValues} />
         <Title
          title="Hình ảnh xe"
          size="16"
          className="mt-5"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_5} className="mt-[30px]" register={register} getValues={getValues} />
      </div>
    </div>
  );
};

export default Step2;

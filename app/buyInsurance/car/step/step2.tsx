import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD, CUSTOM_FIELD_STEP_2_1, CUSTOM_FIELD_STEP_2_2, CUSTOM_FIELD_STEP_2_3, CUSTOM_FIELD_STEP_2_4, CUSTOM_FIELD_STEP_2_5 } from "./utility";

const Step2 = () => {
  return (
    <div>
      <div>
        <Title
          title="Xe ôtô được bảo hiểm"
          subTitle="Vui lòng điền thông tin chính xác"
          className="mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_1} />
        <Title
          title="Thông tin xe bổ sung"
          size="16"
          className="mt-3 mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_2} />
        <RowInfo info={CUSTOM_FIELD_STEP_2_3} className="mt-[30px]" />
        <Title
          title="Hình ảnh & giấy tờ xe"
          className="mt-3 mb-2"
        />
        <Title
          title="Giấy tờ xe"
          size="16"
          className="mt-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_4} className="mt-[30px]" />
         <Title
          title="Hình ảnh xe"
          size="16"
          className="mt-5"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_5} className="mt-[30px]" />
      </div>
    </div>
  );
};

export default Step2;

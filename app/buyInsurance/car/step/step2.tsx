import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD } from "./utility";

const Step2 = () => {
  return (
    <div>
      <div className="mb-3 py-5">
        <Title
          title="Xe ôtô được bảo hiểm"
          subTitle="Vui lòng điền thông tin chính xác"
          className="mb-3"
        />
        <RowInfo info={CUSTOM_FIELD} />
      </div>
    </div>
  );
};

export default Step2;

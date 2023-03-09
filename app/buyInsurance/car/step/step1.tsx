import PackageSelect from "@components/PackageSelect";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD } from "./utility";
// import   from 'assests/arrow.png'
import { useAppDispatch } from './../../../../constants/index';

const Step1 = () => {  
  const dispatch = useAppDispatch()

  return (
    <>
    <div>
      <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
      <RowInfo info={CUSTOM_FIELD}/>
      <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
      <PackageSelect />
    </div>
    </>
  );
};

export default Step1;

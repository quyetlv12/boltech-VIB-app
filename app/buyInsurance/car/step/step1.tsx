import PackageSelect from "@components/PackageSelect";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD } from "./utility";
import Button from "@components/Button";
import { FC } from "react";
import { useAppDispatch } from './../../../../constants/index';
type Inputs = {
  carName: string,
  exampleRequired: string,
};
interface Props {
  register : any ,
  getValues : any
}
const Step1:FC<Props> = ({register , getValues}) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
        <div>
          <RowInfo info={CUSTOM_FIELD} register={register} getValues={getValues} />
          <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
          <PackageSelect />
          <div className="px-3 mt-3">
            <Button
              name={"Tiếp tục"}
              className="w-full"
              hiddenBtn={true}
              type={'submit'}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Step1;

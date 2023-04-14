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
import Button from "@components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { _defaultValue, validate } from "../yupGlobal";
import { STEP_1_DATA_PROPS } from "interfaces/insurances";
import { useForm , SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createContractService } from "services/buyCarInsurance";
interface Props {
 
}
const Step3:FC<Props> = () => {
  const { register, handleSubmit, watch, setValue, getValues, formState: { errors }, control, setError } = useForm<STEP_1_DATA_PROPS>(
    {
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: _defaultValue.step_1,
      resolver: yupResolver(validate)
    }
  );
   //step 3 : update person info
   const paymentlMutation = useMutation(createContractService, {
    onSuccess: data => {
      console.log(data);
      // dispatch(nextStep())
    }
  });
   const onSubmit_step3: SubmitHandler<STEP_1_DATA_PROPS> = async (data) => {
    console.log("3", 3);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit_step3)}>
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
      <Button
          name={"Tiếp tục"}
          className="w-full"
          type={'submit'}
        />
    </form>
  );
};

export default Step3;

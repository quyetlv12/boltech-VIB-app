import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { CUSTOM_FIELD, CUSTOM_FIELD_STEP_2_1, CUSTOM_FIELD_STEP_2_2, CUSTOM_FIELD_STEP_2_3, CUSTOM_FIELD_STEP_2_4, CUSTOM_FIELD_STEP_2_5 } from "./utility";
import { FC, useEffect } from "react";
import Button from "@components/Button";
import { STEP_1_DATA_PROPS } from "interfaces/insurances";
import { useForm , SubmitHandler } from "react-hook-form";
import { _defaultValue, validate } from "../yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContractService } from "services/buyCarInsurance";
import { useMutation } from "@tanstack/react-query";
import { isObjEmpty, useAppSelector } from "@constants";
import { getStep2Data } from "store/buyInsurance";
interface Props {
}
const Step2: FC<Props> = ({ }) => {
  const { register, handleSubmit, watch, setValue, getValues, formState: { errors }, control, setError } = useForm<STEP_1_DATA_PROPS>(
    {
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: _defaultValue.step_1,
      resolver: yupResolver(validate)
    }
  );
  const step_2 = useAppSelector(getStep2Data)
  
  // STEP 2 : update vehicel
  const updateVehicelMutation = useMutation(createContractService, {
    onSuccess: data => {
      console.log(data);
      // dispatch(nextStep())
    }
  });
  const onSubmit_step2: SubmitHandler<STEP_1_DATA_PROPS> = async (data) => {
    console.log("2", 2);
  }
  useEffect(() => {
    // setup value for form if step 1 saved data
    // if (!isObjEmpty(step_1)) {
    //   reset(step_1)
    // }
    
  }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit_step2)}>
      <div>
        <Title
          title="Xe ôtô được bảo hiểm"
          subTitle="Vui lòng điền thông tin chính xác"
          className="mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_1} register={register} getValues={getValues} errors={errors} control={control} />
        <Title
          title="Thông tin xe bổ sung"
          size="16"
          className="mt-3 mb-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_2} register={register} getValues={getValues} errors={errors} control={control} />
        <RowInfo info={CUSTOM_FIELD_STEP_2_3} className="mt-[30px]" register={register} getValues={getValues} errors={errors} control={control} />
        <Title
          title="Hình ảnh & giấy tờ xe"
          className="mt-3 mb-2"
        />
        <Title
          title="Giấy tờ xe"
          size="16"
          className="mt-3"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_4} className="mt-[30px]" register={register} getValues={getValues} errors={errors} control={control} />
        <Title
          title="Hình ảnh xe"
          size="16"
          className="mt-5"
        />
        <RowInfo info={CUSTOM_FIELD_STEP_2_5} className="mt-[30px]" register={register} getValues={getValues} errors={errors} control={control} />
      </div>
      <div className="px-3 mt-3">
        <Button
          name={"Tiếp tục"}
          className="w-full"
          type={'submit'}
        />
      </div>
    </form>
  );
};

export default Step2;

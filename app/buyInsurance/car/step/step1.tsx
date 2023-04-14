import Button from "@components/Button";
import PackageSelect from "@components/PackageSelect";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { FC, useEffect } from "react";
import { createContractService, updateContractService, useCarType } from 'services/buyCarInsurance';
import { KEY_CONTRACT_ID, KEY_CONTRACT_INFO, KEY_STEP, KEY_STEP_1, KEY_VEHICELS, useAppDispatch, useAppSelector } from './../../../../constants/index';
import { CUSTOM_FIELD, getObjectContract } from "./utility";
import { _defaultValue, validate } from "../yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm} from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getContractId, getInputStatus, updateProps } from "store/buyInsurance";
import { STEP_1_DATA_PROPS } from "interfaces/insurances";
import CurrencyInputCpn from "@components/InputCpn";
type Inputs = {
  carName: string,
  exampleRequired: string,
};
interface Props {
}
const Step1: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { status, data, error, isFetching } = useCarType(dispatch);
  const inputStatus = useAppSelector(getInputStatus)
  const contractId = useAppSelector(getContractId)
  //STEP 1 :create contract
  const createContractMutation = useMutation(createContractService, {
    onSuccess: data => {
      const { contract, vehicel } = data
      dispatch(updateProps({ [KEY_STEP]: 2, [KEY_CONTRACT_ID]: contract.id, [KEY_CONTRACT_INFO]: contract, [KEY_VEHICELS]: vehicel }))
    }
  });
   //STEP 1 :if contract id =>  update contract
   const updateContractMutation = useMutation(updateContractService, {
    onSuccess: data => {
      console.log(data);
      
    }
  });
  const { register, handleSubmit, watch ,setValue, getValues, formState: { errors }, control, setError } = useForm<STEP_1_DATA_PROPS>(
    {
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: _defaultValue.step_1,
      resolver: yupResolver(validate)
    }
  );
  const watchAllField = watch()  
  
  // submit step 1
  const onSubmit_step1: SubmitHandler<STEP_1_DATA_PROPS> = async (data) => {
    // save data step
    dispatch(updateProps({[KEY_STEP_1] : data}))
    if (contractId) {
      // updateContractMutation.mutate()
    }
    createContractMutation.mutate(getObjectContract(data))
  }  
  return (
    <form onSubmit={handleSubmit(onSubmit_step1)}>
      {!inputStatus ? <div>
        <Title title="Thông tin chi tiết xe" subTitle="Thay đổi thông tin để có kết quả phù hợp" className="mb-3" />
        <div>
          <RowInfo info={CUSTOM_FIELD} register={register} getValues={getValues} errors={errors} control={control} watchAllField={watchAllField} />
          <Title title="Kết quả gói bảo hiểm phù hợp" className="mb-3 mt-3" size="16" />
          {/* <PackageSelect /> */}
          <div className="px-3 mt-3">
            <Button
              name={"Tiếp tục"}
              className="w-full"
              type={'submit'}
            />
          </div>
        </div>

      </div> : <CurrencyInputCpn setValue={setValue} getValues={getValues} setError={setError} register={register} />}

    </form>
  );
};

export default Step1;

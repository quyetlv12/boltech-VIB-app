import Button from "@components/Button";
import CurrencyInputCpn from "@components/InputCpn";
import RowInfo from "@components/RowInfo";
import Title from "@components/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { STEP_1_DATA_PROPS } from "interfaces/insurances";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createContractService, updateContractService, useCarType } from 'services/buyCarInsurance';
import { getContractId, getInputStatus, getStep1Data, updateProps } from "store/buyInsurance";
import { _defaultValue, validate } from "../yupGlobal";
import { KEY_CONTRACT_ID, KEY_CONTRACT_INFO, KEY_STEP, KEY_STEP_1, KEY_VEHICELS, isObjEmpty, toastError, useAppDispatch, useAppSelector } from './../../../../constants/index';
import { CUSTOM_FIELD, getObjectContract } from "./utility";
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
  const step_1 = useAppSelector(getStep1Data)
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
  const { register, handleSubmit, watch, setValue, getValues, reset, formState: { errors }, control, setError } = useForm<STEP_1_DATA_PROPS>(
    {
      mode: 'all',
      reValidateMode: 'onChange',
      defaultValues: _defaultValue.step_1,
      resolver: yupResolver(validate)
    }
  );
  const watchAllField = watch()

  // submit step 1
  const onSubmit_step1: SubmitHandler<STEP_1_DATA_PROPS> = async (data) => {
    // toastError("Vui lòng nhập đầy đủ thông tin !")
    // save data step
    dispatch(updateProps({ [KEY_STEP_1]: data }))
    if (contractId) {
      // updateContractMutation.mutate()
      console.log("update contract and next step");
      dispatch(
        updateProps(
          {
            [KEY_STEP]: 2
          }
        )
      )

      return
    }
    createContractMutation.mutate(getObjectContract(data))
  }
  useEffect(() => {
    // setup value for form if step 1 saved data
    if (!isObjEmpty(step_1)) {
      reset(step_1)
    }
  }, [])

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

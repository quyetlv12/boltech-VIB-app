import {
  useQuery
} from "@tanstack/react-query";
import { API_CAR_CONTRACT, API_CAR_TYPE, API_CAR_VEHICEL } from "configs";
import { setCarType } from "store/buyInsurance";
import { HttpClient } from "../utills/HttpClient";
import { AppDispatch } from "store";
import { getObjectVehicel } from "app/buyInsurance/car/step/utility";

export const useCarType = (dispatch : Function) => {
  return useQuery({
    queryKey: ["car_types"],
    queryFn: async () => {
      const { data, status } = await HttpClient.get(
        API_CAR_TYPE
      );
      if (status === 200) {
        dispatch(setCarType(data))
      }
      return data;
    },
    enabled: true,
    staleTime: Infinity
  });
}
export const createContractService = async (values: any) => {
  const contractRes = await HttpClient.post(
    API_CAR_CONTRACT, values
  );
  const vehicelRes = await HttpClient.post(
    API_CAR_VEHICEL, getObjectVehicel(values , contractRes.data.id) 
  );
  return {
    contract: contractRes.data,
    vehicel: vehicelRes.data
  };
}

export const updateContractService = async (values : any) => {
  const contractRes = await HttpClient.put(
    API_CAR_CONTRACT, values
  );
  return {
    contract: contractRes.data,
    // vehicel: vehicelRes.data
  };
}
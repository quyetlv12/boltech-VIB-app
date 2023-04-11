import {
    useQuery
} from "@tanstack/react-query";
import { API_CAR_TYPE } from "configs";
import { setCarType } from "store/buyInsurance";
import { HttpClient } from "./HttpClient";

export const useCarType = (dispatch:any) => {
    return useQuery({
      queryKey: ["car_types"],
      queryFn: async () => {
        const { data } = await HttpClient.get(
          API_CAR_TYPE
        );        
        dispatch(setCarType(data))
        return data;
      },
    });
  }
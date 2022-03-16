import axios from "axios";
import { TotalTimeType } from "../types/Time";

const URL = "http://localhost:8000";
export const getAllTatalTime = async (userID: number) => {
  try {
    const result = await axios.get<TotalTimeType>(`${URL}/total/all/${userID}`);
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getItemsTatalTime = async (userID: number) => {
  try {
    const result = await axios.get<TotalTimeType[]>(
      `${URL}/total/items/${userID}`
    );
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

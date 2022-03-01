/**
 * （テスト用）仮です
 */

import { axiosMock } from "../data/axiosMock";
import { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  const url = "/users/list";
  try {
    const result = await axiosMock.get<User[]>(url);
    return result.data;
  } catch (error) {
    throw new Error();
  }
};

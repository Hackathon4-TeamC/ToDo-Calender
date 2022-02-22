/**
 * （テスト用）仮です
 */

import { rest } from "../data/rest";
import { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  const url = "/user/list";
  try {
    const { data } = await rest.get<User[]>(url);
    return data;
  } catch (error) {
    throw new Error();
  }
};

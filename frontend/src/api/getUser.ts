/**
 * （テスト用）仮です
 */

import { rest } from "../data/rest";
import { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  const url = "/users/list";
  try {
    const result = await rest.get<User[]>(url);
    return result.data;
  } catch (error) {
    throw new Error();
  }
};

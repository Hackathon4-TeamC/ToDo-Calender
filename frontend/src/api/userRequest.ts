/**
 * ログインのリクエスト
 */

import { rest } from "../data/rest";
import { User } from "../types/User";

export const postLoginUser = async (
  inputEmail: string,
  inputPassword: string
) => {
  const url = "/users/login";
  try {
    const result = await rest.post<User>(url, {
      email: inputEmail,
      password: inputPassword,
    });
    return result.data;
  } catch (err) {
    throw new Error();
  }
};

/**
 * ユーザー処理のリクエスト
 */

import { axiosMock } from "../data/axiosMock";
import { User } from "../types/User";

export const postLoginUser = async (
  inputEmail: string,
  inputPassword: string
) => {
  try {
    const result = await axiosMock.post<User>("/users/login", {
      email: inputEmail,
      password: inputPassword,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

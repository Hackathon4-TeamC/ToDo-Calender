/**
 * ユーザー処理のリクエスト
 */

import axios from "axios";
import { axiosMock } from "../data/axiosMock";
import { User } from "../types/User";

// ログインのリクエスト
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

// 新規登録リクエスト
export const postRegisterUser = async (
  inputUserName: string,
  inputEmail: string,
  inputPassword: string
) => {
  try {
    const result = await axiosMock.post<User>("/users/register", {
      user_name: inputUserName,
      email: inputEmail,
      password: inputPassword,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// ユーザー情報取得リクエスト
export const getMyUserData = async (token: string) => {
  try {
    const result = await axiosMock.get<User>("/users/me", {
      headers: {
        Authorizaton: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * 仮に作っています。あとで消します
 */
import { axiosMock } from "../data/requestMock";
import { User } from "../types/test";

export const getUsers = async () => {
  const url = "/user/list";
  try {
    const result = await axiosMock.get<User[]>(url);
    return result.data;
  } catch (error) {
    throw new Error();
  }
};

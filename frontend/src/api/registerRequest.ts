



import { axiosMock } from "../data/axiosMock";
import { User } from "../types/User";

export const postRegisterUser = async (
    inputUserName: string,
    inputEmail: string,
    inputPassword: string,
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
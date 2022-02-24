/**
 * 仮です。あとで消します
 */

import axios, { AxiosResponse } from "axios";
import mock from "./mock/$mock";

export const rest = (() => {
  const client = axios.create({
    baseURL: "", // 今回は未指定 (通常は env などから参照させる)
    timeout: 15000,
  });
  return {
    client,
    get: <T = any, R = AxiosResponse<T>>(url: string): Promise<R> => {
      return client.get(url);
    },
    post: <T = any, R = AxiosResponse<T>>(
      url: string,
      data: any
    ): Promise<R> => {
      return client.post(url, data);
    },
  };
})();

const useMock = true;
if (useMock) {
  mock(rest.client).enableLog().setDelayTime(500);
}

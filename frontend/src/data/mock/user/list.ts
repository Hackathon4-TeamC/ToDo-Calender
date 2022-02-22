import { MockMethods, MockResponse } from "axios-mock-server";
import { User } from "../../../types/User";

const list: MockMethods = {
  get: async (): Promise<MockResponse> => {
    const data: User[] = [
      {
        id: 1,
        name: "A",
      },
      {
        id: 2,
        name: "B",
      },
    ];
    return [200, data];
  },
};

export default list;

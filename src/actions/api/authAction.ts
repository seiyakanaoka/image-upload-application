import { Auth, Token } from "@/models/Auth";
import { axiosClient } from "@/utils/axiosClient";

export const postLogin = async (
  apiPath: string,
  requestBody: Auth
): Promise<Token> => {
  const response = await axiosClient.post(apiPath, requestBody);
  return response.data;
};

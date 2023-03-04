import { authAxiosClient } from "@/utils/axiosClient";
import { Auth, Token } from "@/models/Auth";

export const postLogin = async (
  apiPath: string,
  requestBody: Auth
): Promise<Token> => {
  console.log("apiPath : ", apiPath);
  console.log("requestBody : ", requestBody);
  const response = await authAxiosClient.post(apiPath, requestBody);
  console.log("あああ : ", response);
  return response.data;
};

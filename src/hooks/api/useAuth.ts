import { postLogin } from "@/actions/api/authAction";
import { Auth } from "@/models/Auth";

export const useAuth = () => {
  const login = async (requestBody: Auth): Promise<string> => {
    const token = await postLogin("/api/login", requestBody);
    console.log("token: ", token);
    return token.token;
  };

  return { login };
};

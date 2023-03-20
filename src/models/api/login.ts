export type JwtToken = string;

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: JwtToken;
}

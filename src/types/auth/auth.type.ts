export interface SignupResponse {
  id: number;
  email: string;
}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

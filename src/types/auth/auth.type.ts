export interface SignupResponse {
  id: number;
  email: string;
}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshReponse {
  accessToken: string;
  refreshToken: string;
}

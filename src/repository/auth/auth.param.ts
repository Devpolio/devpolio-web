export interface SignupParam {
  name: string;
  email: string;
  password: string;
}

export interface SigninParam {
  email: string;
  password: string;
}

export interface TokenRefreshParam {
  refreshToken: string;
}

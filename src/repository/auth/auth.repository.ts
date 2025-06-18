import axios from "axios";
import config from "@/config/config.json";
import { SignupParam, SigninParam, TokenRefreshParam } from "./auth.param";
import {
  RefreshResponse,
  SigninResponse,
  SignupResponse,
} from "@/types/auth/auth.type";

class AuthRepository {
  public async signup(Param: SignupParam): Promise<SignupResponse> {
    const { data } = await axios.post(`${config.ip}/auth/signup`, Param);
    return data;
  }

  public async signin(Param: SigninParam): Promise<SigninResponse> {
    const { data } = await axios.post(`${config.ip}/auth/signin`, Param);
    return data;
  }

  public async tokenRefresh(Param: TokenRefreshParam): Promise<RefreshResponse> {
    const { data } = await axios.post(`${config.ip}/auth/refresh`, Param);
    return data;
  }
}

export default new AuthRepository();

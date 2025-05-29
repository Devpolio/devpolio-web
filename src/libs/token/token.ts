import cookie from "../cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant";

class Token {
  public getToken(key: string) {
    return cookie.getCookie(key);
  }

  public setToken(key: string, value: string) {
    cookie.setCookie(key, value);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();

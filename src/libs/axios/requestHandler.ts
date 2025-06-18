import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/token/token.constant";
import token from "../token/token";
import { InternalAxiosRequestConfig } from "axios";

const requestHandler = (config: InternalAxiosRequestConfig) => {
  if (!token.getToken(ACCESS_TOKEN_KEY)) {
    alert("세션 만료");
    window.location.replace("/signin"); // 현재 페이지에 해당 페이지를 덮어씀 (SPA에 유리)
  } else {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token.getToken(
      ACCESS_TOKEN_KEY
    )}`;
  }

  return config;
};

export default requestHandler;

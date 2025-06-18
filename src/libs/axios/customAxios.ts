import axios, { AxiosRequestConfig } from "axios";
import config from "@/config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/token/token.constant";
import token from "../token/token";
import requestHandler from "./requestHandler";

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "ngrok-skip-browser-warning": "true",
    },
  };

  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const DevfolioAxios = createAxiosInstance({
  baseURL: config.ip,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

DevfolioAxios.interceptors.request.use(requestHandler, (res) => res);

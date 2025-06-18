import config from "@/config/config.json";
import { PortfolioParam } from "./portfolio.param";
import {
  PortfolioListResponse,
  PortfolioResponse,
} from "@/types/portfolio/portfolio.type";
import { DevfolioAxios } from "@/libs/axios/customAxios";

class PortfolioRepository {
  public async getPortfolio(id: number): Promise<PortfolioResponse> {
    const { data } = await DevfolioAxios.get(`${config.ip}/portfolio/${id}`);
    return data;
  }

  public async getPortfolioList(
    category: string
  ): Promise<PortfolioListResponse[]> {
    const { data } = await DevfolioAxios.get(`${config.ip}/portfolio`, {
      params: { category },
    });
    return data;
  }

  public async getMyPortfolioList(): Promise<PortfolioListResponse[]> {
    const { data } = await DevfolioAxios.get(`${config.ip}/portfolio/my`);
    return data;
  }

  public async postPortfolio(formData: PortfolioParam | FormData): Promise<void> {
    const { data } = await DevfolioAxios.post(
      `${config.ip}/portfolio`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }

  public async deletePortfolio(id: number): Promise<void> {
    const { data } = await DevfolioAxios.delete(`${config.ip}/portfolio/${id}`);
    return data;
  }
}

export default new PortfolioRepository();

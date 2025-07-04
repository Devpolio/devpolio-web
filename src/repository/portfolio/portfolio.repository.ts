import config from "@/config/config.json";
import { PortfolioParam, UpdatePortfolioParam } from "./portfolio.param";
import {
  PortfolioListResponse,
  PortfolioResponse,
} from "@/types/portfolio/portfolio.type";
import { DevfolioAxios } from "@/libs/axios/customAxios";

class PortfolioRepository {
  public async getPortfolio(id: number): Promise<PortfolioResponse> {
    const { data } = await DevfolioAxios.get(`/portfolio/${id}`);
    return data;
  }

  public async getPortfolioList(
    category: string
  ): Promise<PortfolioListResponse[]> {
    const { data } = await DevfolioAxios.get(`/portfolio`, {
      params: { category },
    });
    return data;
  }

  public async getMyPortfolioList(): Promise<PortfolioListResponse[]> {
    const { data } = await DevfolioAxios.get(`/portfolio/my`);
    return data;
  }

  public async postPortfolio(
    formData: PortfolioParam | FormData
  ): Promise<void> {
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

  public async patchPortfolio(
    id: number,
    body: UpdatePortfolioParam
  ): Promise<void> {
    const { data } = await DevfolioAxios.patch(`/portfolio/${id}`, body);
    return data;
  }

  public async deletePortfolio(id: number): Promise<void> {
    const { data } = await DevfolioAxios.delete(`/portfolio/${id}`);
    return data;
  }

  public async postPortfolioLike(id: number): Promise<void> {
    const { data } = await DevfolioAxios.post(`/portfolio/${id}/like`);
    return data;
  }

  public async deletePortfolioLike(id: number): Promise<void> {
    const { data } = await DevfolioAxios.delete(`/portfolio/${id}/like`);
    return data;
  }
}

export default new PortfolioRepository();

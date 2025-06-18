import config from "@/config/config.json";
import { DevfolioAxios } from "@/libs/axios/customAxios";
import { UserListResponse, UserResponse } from "@/types/user/user.type";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await DevfolioAxios.get(`/user`);
    return data;
  }

  public async getUserList(): Promise<UserListResponse[]> {
    const { data } = await DevfolioAxios.get(`/admin/users`);
    return data;
  }

  public async getUserFilter(userId: number): Promise<void> {
    const { data } = await DevfolioAxios.get(
      `${config.ip}/admin/users/${userId}`
    );
    return data;
  }

  public async getUserSearch(name: string, email: string): Promise<void> {
    const { data } = await DevfolioAxios.get(`/admin/users/search`, {
      params: { name, email },
    });
    return data;
  }
}

export default new UserRepository();

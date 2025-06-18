import config from "@/config/config.json";
import { DevfolioAxios } from "@/libs/axios/customAxios";
import { UserResponse } from "@/types/user/user.type";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await DevfolioAxios.get(`${config.ip}/user`);
    return data;
  }
}

export default new UserRepository();

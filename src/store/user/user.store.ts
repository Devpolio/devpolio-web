import { defineStore } from "pinia";
import { UserResponse } from "@/types/user/user.type";

export const useUserStore = defineStore("user", {
  state: (): { user: UserResponse } => ({
    user: {
      name: "",
      email: "",
      roles: [],
    },
  }),
  actions: {
    setUser(user: UserResponse) {
      this.user = user;
    },
    resetUser() {
      this.user = {
        name: "",
        email: "",
        roles: [],
      };
    },
  },
});

type roleType = "ROLE_USER" | "ROLE_ADMIN";

export interface UserResponse {
  name: string;
  email: string;
  roles: roleType[];
}

export interface UserListResponse {
  id: number;
  name: string;
  email: string;
  roles: roleType[];
}

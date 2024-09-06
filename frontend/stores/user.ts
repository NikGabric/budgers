import { defineStore } from "pinia";

export interface User {
  profilePicture?: string;
  username: string;
  email: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}

export const useUserStore = defineStore("user", () => {
  const user: Ref<User | null> = ref(null);

  const getUser: ComputedRef<User | null> = computed(() => user.value);

  const login = async (_loginUserDto: LoginUserDto) => {
    user.value = {
      username: "Test user",
      email: "test@user.si",
    };
    localStorage.setItem("user", JSON.stringify(user.value));
  };

  const logout = async () => {
    user.value = null;
    localStorage.removeItem("user");
  };

  return { user, getUser, login, logout };
});

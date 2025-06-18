<script setup lang="ts">
import * as S from "./style";
import Logo from "@/assets/img/Logo.vue";
import Avatar from "@/assets/img/Avatar.svg";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import userRepository from "@/repository/user/user.repository";
import { UserResponse } from "@/types/user/user.type";
import token from "@/libs/token/token";

const route = useRoute();
const router = useRouter();
const isSelect = ref({
  home: false,
  myPortfolio: false,
});
const user = ref<UserResponse>({
  name: "",
  email: "",
  role: "",
});

const handleClickLogout = () => {
  token.clearToken();
  router.push("/signin");
};

onMounted(() => {
  const currentPath = route.path;
  isSelect.value = {
    home: currentPath === "/",
    myPortfolio: currentPath === "/my-portfolio",
  };

  userRepository.getUser().then((res) => (user.value = res));
});
</script>

<template>
  <S.Container>
    <S.Wrap>
      <Logo />
      <S.Menu>
        <S.Item :isSelect="isSelect.home" @click="router.push('/')">홈</S.Item>
        <S.Item
          :isSelect="isSelect.myPortfolio"
          @click="router.push('/my-portfolio')"
          >내 포트폴리오</S.Item
        >
      </S.Menu>
    </S.Wrap>
    <S.Bottom>
      <S.Profile>
        <S.Avatar :src="Avatar"></S.Avatar>
        <S.ProfileName>{{ user.name || "사용자" }}님</S.ProfileName>
      </S.Profile>
      <S.Logout @click="handleClickLogout">로그아웃</S.Logout>
    </S.Bottom>
  </S.Container>
</template>

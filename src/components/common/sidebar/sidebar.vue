<script setup lang="ts">
import * as S from "./style";
import Logo from "@/assets/img/Logo.vue";
import Avatar from "@/assets/img/Avatar.svg";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isSelect = ref({
  home: false,
  myPortfolio: false,
});

onMounted(() => {
  const currentPath = route.path;
  isSelect.value = {
    home: currentPath === "/",
    myPortfolio: currentPath === "/my-portfolio",
  };
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
    <S.Profile>
      <S.Avatar :src="Avatar"></S.Avatar>
      <S.ProfileName>박시현님</S.ProfileName>
    </S.Profile>
  </S.Container>
</template>

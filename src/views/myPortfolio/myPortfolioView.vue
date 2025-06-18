<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as S from "./style";
import Plus from "@/assets/img/common/plus.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import PortfolioCard from "@/components/common/portfolioCard/portfolioCard.vue";
import { useRouter } from "vue-router";
import { PortfolioListResponse } from "@/types/portfolio/portfolio.type";
import portfolioRepository from "@/repository/portfolio/portfolio.repository";
import { showToast } from "@/libs/toast/swal";

const router = useRouter();
const myPortfolioList = ref<PortfolioListResponse[]>([]);

onMounted(() => {
  try {
    portfolioRepository
      .getMyPortfolioList()
      .then((res) => (myPortfolioList.value = res));
  } catch (error) {
    showToast("error", "내 포트폴리오를 불러오는 중 오류가 발생했습니다.");
  }
});
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Main>
        <S.TitleWrap>
          <S.Title>내 포트폴리오</S.Title>
          <S.CreateButton @click="router.push('/create-portfolio')">
            <S.CreateText>포트폴리오 생성</S.CreateText>
            <Plus />
          </S.CreateButton>
        </S.TitleWrap>
        <S.ListWrap>
          <S.ListTitle>나의 포트폴리오 리스트</S.ListTitle>
          <S.List>
            <PortfolioCard :portfolioList="myPortfolioList" />
          </S.List>
        </S.ListWrap>
      </S.Main>
    </S.Wrap>
  </S.Container>
</template>

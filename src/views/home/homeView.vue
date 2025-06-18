<script setup lang="ts">
import * as S from "./style";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import Portfolio from "@/assets/img/portfolio.svg";
import Heart from "@/assets/img/common/heart/heart.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import PortfolioCard from "@/components/common/portfolioCard/portfolioCard.vue";
import { ref, watch, computed, onMounted } from "vue";
import portfolioRepository from "@/repository/portfolio/portfolio.repository";
import { showToast } from "@/libs/toast/swal";
import { PortfolioListResponse } from "@/types/portfolio/portfolio.type";

const categoryData = ref(CATEGORY_ITEMS);
const portfolioList = ref<PortfolioListResponse[]>([]);

const top10PortfolioList = computed(() =>
  [...portfolioList.value].sort((a, b) => b.likes - a.likes).slice(0, 10)
);

const selectCategory = computed(() => {
  const selectedItem = categoryData.value.find((item) => item.isSelect);
  return selectedItem ? selectedItem.name : undefined;
});

const handleClickCategory = (name: string) => {
  categoryData.value = categoryData.value.map((item) => ({
    ...item,
    isSelect: item.name === name,
  }));
};

watch(selectCategory, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    try {
      portfolioRepository
        .getPortfolioList(newVal!)
        .then((res) => (portfolioList.value = res));
    } catch (error) {
      showToast("error", "포트폴리오를 불러오는 중 오류가 발생했습니다.");
    }
  }
});

onMounted(() => {
  try {
    portfolioRepository
      .getPortfolioList("전체")
      .then((res) => (portfolioList.value = res));
  } catch (error) {
    showToast("error", "포트폴리오를 불러오는 중 오류가 발생했습니다.");
  }
});
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Main>
        <S.TitleWrap>
          <S.Title>홈</S.Title>
          <S.CurrentCategory>카테고리 : {{ selectCategory }}</S.CurrentCategory>
        </S.TitleWrap>
        <S.RankWrap>
          <S.RankTitle>Top 10</S.RankTitle>
          <S.RankList>
            <PortfolioCard :portfolioList="top10PortfolioList" />
          </S.RankList>
        </S.RankWrap>
        <S.PortfolioWrap>
          <S.PortfolioTitle>포트폴리오</S.PortfolioTitle>
          <template v-if="portfolioList.length === 0">
            <S.NullPortfolio>포트폴리오가 없습니다.</S.NullPortfolio>
          </template>
          <template v-else>
            <S.PortfolioList v-for="item in portfolioList" :key="item.id">
              <S.PortfolioInfoWrap>
                <S.PortfolioImg :src="Portfolio" />
                <S.PortfolioInfo>
                  <S.PortfolioTitleText>{{ item.title }}</S.PortfolioTitleText>
                  <S.PortfolioContent>
                    <S.PortfolioContentText
                      >작성자: {{ item.author }}</S.PortfolioContentText
                    >
                    <S.PortfolioContentText
                      >작성일: {{ item.createdAt }}</S.PortfolioContentText
                    >
                  </S.PortfolioContent>
                </S.PortfolioInfo>
              </S.PortfolioInfoWrap>
              <S.PortfolioLikeWrap>
                <!-- 이것도 js로 처리할 예정 -->
                <Heart />
                <S.PortfolioLikeCount>{{ item.likes }}</S.PortfolioLikeCount>
              </S.PortfolioLikeWrap>
            </S.PortfolioList>
          </template>
        </S.PortfolioWrap>
      </S.Main>
      <Category
        :data="categoryData"
        @handleClickCategory="handleClickCategory" />
    </S.Wrap>
  </S.Container>
</template>

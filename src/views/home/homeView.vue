<script setup lang="ts">
import * as S from "./style";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import Portfolio from "@/assets/img/portfolio.svg";
import Heart from "@/assets/img/common/heart/heart.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import PortfolioCard from "@/components/common/portfolioCard/portfolioCard.vue";
import { ref, computed } from "vue";

const categoryData = ref(CATEGORY_ITEMS);

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
            <PortfolioCard />
          </S.RankList>
        </S.RankWrap>
        <S.PortfolioWrap>
          <S.PortfolioTitle>포트폴리오</S.PortfolioTitle>
          <S.PortfolioList v-for="i in 10" :key="i">
            <S.PortfolioInfoWrap>
              <S.PortfolioImg :src="Portfolio" />
              <S.PortfolioInfo>
                <S.PortfolioTitleText>포트폴리오 제목</S.PortfolioTitleText>
                <S.PortfolioContent>
                  <S.PortfolioContentText
                    >작성자: 박시현</S.PortfolioContentText
                  >
                  <S.PortfolioContentText
                    >작성일: 2025. 05</S.PortfolioContentText
                  >
                </S.PortfolioContent>
              </S.PortfolioInfo>
            </S.PortfolioInfoWrap>
            <S.PortfolioLikeWrap>
              <!-- 이것도 js로 처리할 예정 -->
              <Heart />
              <S.PortfolioLikeCount>4</S.PortfolioLikeCount>
            </S.PortfolioLikeWrap>
          </S.PortfolioList>
        </S.PortfolioWrap>
      </S.Main>
      <Category
        :data="categoryData"
        @handleClickCategory="handleClickCategory" />
    </S.Wrap>
  </S.Container>
</template>

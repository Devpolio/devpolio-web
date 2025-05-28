<script setup lang="ts">
import * as S from "./style";
import Portfolio from "@/assets/img/portfolio.svg";
import Heart from "@/assets/img/common/heart/heart.vue";
import HeartOutline from "@/assets/img/common/heart/heartOutline.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import { ref, computed } from "vue";

const categoryData = ref([
  { id: 1, name: "전체", isSelect: true },
  { id: 2, name: "개발", isSelect: false },
  { id: 3, name: "마케팅 · 광고", isSelect: false },
  { id: 4, name: "경영 · 비지니스", isSelect: false },
  { id: 5, name: "디자인", isSelect: false },
  { id: 6, name: "제조 · 생산", isSelect: false },
  { id: 7, name: "금융", isSelect: false },
  { id: 6, name: "제조 · 생산", isSelect: false },
  { id: 7, name: "금융", isSelect: false },
]);

const selectCategory = computed(() => {
  const selectedItem = categoryData.value.find((item) => item.isSelect);
  return selectedItem ? selectedItem.name : undefined;
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
            <S.RankItem v-for="i in 10" :key="i">
              <S.ItemImg :src="Portfolio" />
              <S.ItemWrap>
                <S.ItemInfo>
                  <S.ItemTitle>포트폴리오 제목</S.ItemTitle>
                  <S.ItemContent>
                    <S.ItemText>작성자: 박시현</S.ItemText>
                    <S.ItemText>작성일: 2025. 05</S.ItemText>
                  </S.ItemContent>
                </S.ItemInfo>
                <S.ItemLike>
                  <!-- Heart 사용해서 v-if 사용할 예정 -->
                  <HeartOutline />
                  <S.LikeCount>4</S.LikeCount>
                </S.ItemLike>
              </S.ItemWrap>
            </S.RankItem>
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
                  <S.PortfolioContentText>작성자: 박시현</S.PortfolioContentText>
                  <S.PortfolioContentText>작성일: 2025. 05</S.PortfolioContentText>
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
      <Category :data="categoryData" />
    </S.Wrap>
  </S.Container>
</template>

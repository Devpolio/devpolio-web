<script setup lang="ts">
import * as S from "./style";
import Portfolio from "@/assets/img/portfolio.svg";
import HeartOutline from "@/assets/img/common/heart/heartOutline.vue";
import { PortfolioListResponse } from "@/types/portfolio/portfolio.type";

interface PortfolioCardProps {
  portfolioList: PortfolioListResponse[];
}

const { portfolioList } = defineProps<PortfolioCardProps>();
</script>

<template>
  <template v-if="portfolioList.length === 0">
    <S.NullPortfolio>포트폴리오가 없습니다.</S.NullPortfolio>
  </template>
  <template v-else>
    <S.Container v-for="item in portfolioList" :key="item.id">
      <S.Img :src="Portfolio" />
      <S.Wrap>
        <S.Info>
          <S.Title>{{ item.title }}</S.Title>
          <S.Content>
            <S.Text>작성자: {{ item.author }}</S.Text>
            <S.Text>작성일: {{ item.createdAt }}</S.Text>
          </S.Content>
        </S.Info>
        <S.Like>
          <!-- Heart 사용해서 v-if 사용할 예정 -->
          <HeartOutline />
          <S.LikeCount>{{ item.likes || 0 }}</S.LikeCount>
        </S.Like>
      </S.Wrap>
    </S.Container>
  </template>
</template>

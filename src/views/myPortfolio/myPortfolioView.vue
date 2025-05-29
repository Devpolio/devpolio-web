<script setup lang="ts">
import * as S from "./style";
import Plus from "@/assets/img/common/plus.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import PortfolioCard from "@/components/common/portfolioCard/portfolioCard.vue";
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Main>
        <S.TitleWrap>
          <S.Title>내 포트폴리오</S.Title>
          <S.CreateButton>
            <S.CreateText>포트폴리오 생성</S.CreateText>
            <Plus />
          </S.CreateButton>
        </S.TitleWrap>
        <S.ListWrap>
          <S.ListTitle>나의 포트폴리오 리스트</S.ListTitle>
          <S.List>
            <PortfolioCard />
          </S.List>
        </S.ListWrap>
      </S.Main>
    </S.Wrap>
  </S.Container>
</template>

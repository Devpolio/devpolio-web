<script setup lang="ts">
import * as S from "./style";
import Portfolio from "@/assets/img/portfolio.svg";
import HeartOutline from "@/assets/img/common/heart/heartOutline.vue";

// data props로 받는 변수 작서해야함
</script>

<template>
  <S.Container v-for="i in 10" :key="i">
    <S.Img :src="Portfolio" />
    <S.Wrap>
      <S.Info>
        <S.Title>포트폴리오 제목</S.Title>
        <S.Content>
          <S.Text>작성자: 박시현</S.Text>
          <S.Text>작성일: 2025. 05</S.Text>
        </S.Content>
      </S.Info>
      <S.Like>
        <!-- Heart 사용해서 v-if 사용할 예정 -->
        <HeartOutline />
        <S.LikeCount>4</S.LikeCount>
      </S.Like>
    </S.Wrap>
  </S.Container>
</template>

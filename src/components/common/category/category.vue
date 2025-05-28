<script setup lang="ts">
import * as S from "./style";
import ArrowDown from "@/assets/img/common/arrow/arrowDown.vue";
import ArrowUp from "@/assets/img/common/arrow/arrowUp.vue";
import Check from "@/assets/img/common/check.vue";
import { CategoryProps } from "@/types/common/category/category.type";
import { ref } from "vue";

const { data } = defineProps<CategoryProps>();
const isOpen = ref(false);
</script>

<template>
  <S.Container>
    <S.TitleWrap @click="isOpen = !isOpen">
      <S.Title>카테고리</S.Title>
      <ArrowUp v-if="isOpen" />
      <ArrowDown v-else />
    </S.TitleWrap>
    <S.ItemWrap v-if="isOpen">
      <S.Item v-for="category in data" :key="category.id">
        <Check :color="category.isSelect ? 'primaryNormal' : 'lineNormal'" />
        <S.ItemName>{{ category.name }}</S.ItemName>
      </S.Item>
    </S.ItemWrap>
  </S.Container>
</template>

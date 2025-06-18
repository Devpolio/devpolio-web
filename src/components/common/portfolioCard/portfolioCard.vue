<script setup lang="ts">
import * as S from "./style";
import Portfolio from "@/assets/img/portfolio.svg";
import HeartOutline from "@/assets/img/common/heart/heartOutline.vue";
import { PortfolioListResponse } from "@/types/portfolio/portfolio.type";
import Heart from "@/assets/img/common/heart/heart.vue";
import dayjs from "dayjs";
import Trash from "@/assets/img/common/trash.vue";
import { useUserStore } from "@/store/user/user.store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

interface PortfolioCardProps {
  portfolioList: PortfolioListResponse[];
}

const router = useRouter();
const { user } = storeToRefs(useUserStore());
const { portfolioList } = defineProps<PortfolioCardProps>();

const emit = defineEmits<{
  (e: "handleLikeClick", id: number, isLiked: boolean): void;
  (e: "handlePreviewClick", id: number): void;
  (e: "handleDownloadClick", id: number): void;
  (e: "handleDeleteClick", id: number): void;
}>();
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
            <S.Text
              >작성일: {{ dayjs(item.createdAt).format("YYYY-MM-DD") }}</S.Text
            >
          </S.Content>
        </S.Info>
        <S.Like @click="() => emit('handleLikeClick', item.id, item.isLiked)">
          <Heart v-if="item.isLiked" />
          <HeartOutline v-else />
          <S.LikeCount>{{ item.likeCount || 0 }}</S.LikeCount>
        </S.Like>
      </S.Wrap>
      <S.ButtonWrap>
        <S.GetButtonWrap>
          <S.PreviewButton @click="() => emit('handlePreviewClick', item.id)">
            미리보기
          </S.PreviewButton>
          <S.DownloadButton @click="() => emit('handleDownloadClick', item.id)">
            다운로드
          </S.DownloadButton>
          <S.ModifyButton
            v-if="item.author === user.name"
            @click="router.push(`/update-portfolio/${item.id}`)"
            >수정</S.ModifyButton
          >
        </S.GetButtonWrap>
        <S.DeleteButtonWrap v-if="item.author === user.name">
          <Trash
            color="#767680"
            @click="() => emit('handleDeleteClick', item.id)" />
        </S.DeleteButtonWrap>
      </S.ButtonWrap>
    </S.Container>
  </template>
</template>

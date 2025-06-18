<script setup lang="ts">
import * as S from "./style";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import Portfolio from "@/assets/img/portfolio.svg";
import dayjs from "dayjs";
import Heart from "@/assets/img/common/heart/heart.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import PortfolioCard from "@/components/common/portfolioCard/portfolioCard.vue";
import { ref, watch, computed, onMounted } from "vue";
import portfolioRepository from "@/repository/portfolio/portfolio.repository";
import { showToast } from "@/libs/toast/swal";
import { PortfolioListResponse } from "@/types/portfolio/portfolio.type";
import HeartOutline from "@/assets/img/common/heart/heartOutline.vue";
import fileRepository from "@/repository/file/file.repository";

const categoryData = ref(CATEGORY_ITEMS);
const portfolioList = ref<PortfolioListResponse[]>([]);

const top10PortfolioList = computed(() =>
  [...portfolioList.value]
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 10)
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

const handleClickLike = (id: number, isLiked: boolean) => {
  try {
    if (!isLiked) {
      portfolioRepository.postPortfolioLike(id);
    } else {
      portfolioRepository.deletePortfolioLike(id);
    }

    // 로컬에서 임시로 갱신
    portfolioList.value = portfolioList.value.map((item) =>
      item.id === id
        ? {
            ...item,
            isLiked: !isLiked,
            likeCount: isLiked ? item.likeCount - 1 : item.likeCount + 1,
          }
        : item
    );
  } catch (error) {
    console.error("좋아요 처리 중 오류 발생:", error);
  }
};

const getPortfolioDetail = async (id: number) => {
  try {
    const res = await portfolioRepository.getPortfolio(id);
    const urls = res.files.map((file) => file.storedFileName);
    return urls;
  } catch (error) {
    showToast(
      "error",
      "포트폴리오 상세 정보를 불러오는 중 오류가 발생했습니다."
    );
    return [];
  }
};

const handleClickPreview = async (id: number) => {
  try {
    const urls = await getPortfolioDetail(id);

    // 팝업들을 먼저 빈 창으로 열어둠
    const popupWindows = urls.map(() => window.open("", "_blank"));

    // 파일들을 받아와서 순서대로 팝업에 URL 설정
    urls.forEach(async (url, index) => {
      const blob = await fileRepository.getFileView(url);
      const file = new Blob([blob], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);

      if (popupWindows[index]) {
        popupWindows[index].location.href = fileURL;
      }
    });
  } catch (error) {
    showToast(
      "error",
      "포트폴리오 미리보기를 불러오는 중 오류가 발생했습니다."
    );
  }
};

const handleClickDownload = async (id: number) => {
  try {
    const urls = await getPortfolioDetail(id);

    urls.forEach(async (url) => {
      try {
        const blob = await fileRepository.getFileDownload(url); // 실제 다운로드 Blob API 호출
        const downloadUrl = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = decodeURIComponent(url); // 혹시 한글이 포함된 경우 처리
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        showToast("error", "파일 다운로드에 실패했습니다.");
      }
    });
  } catch (error) {
    showToast("error", "포트폴리오 다운로드 중 오류가 발생했습니다.");
  }
};

const handleClickDelete = (id: number) => {
  try {
    portfolioRepository.deletePortfolio(id).then(() => {
      portfolioList.value = portfolioList.value.filter(
        (item) => item.id !== id
      );
      showToast("success", "포트폴리오가 삭제되었습니다.");
    });
  } catch (error) {
    showToast("error", "포트폴리오 삭제 중 오류가 발생했습니다.");
  }
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
            <PortfolioCard
              :portfolioList="top10PortfolioList"
              @handleLikeClick="handleClickLike"
              @handlePreviewClick="handleClickPreview"
              @handleDownloadClick="handleClickDownload"
              @handleDeleteClick="handleClickDelete" />
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
                      >작성일:
                      {{
                        dayjs(item.createdAt).format("YYYY-MM-DD")
                      }}</S.PortfolioContentText
                    >
                  </S.PortfolioContent>
                </S.PortfolioInfo>
              </S.PortfolioInfoWrap>
              <S.InfoWrap>
                <S.PortfolioLikeWrap
                  @click="handleClickLike(item.id, item.isLiked)">
                  <Heart v-if="item.isLiked" />
                  <HeartOutline v-else />
                  <S.PortfolioLikeCount>{{
                    item.likeCount
                  }}</S.PortfolioLikeCount>
                </S.PortfolioLikeWrap>
                <S.ButtonWrap>
                  <S.PreviewButton @click="handleClickPreview(item.id)"
                    >미리보기</S.PreviewButton
                  >
                  <S.DownloadButton @click="handleClickDownload(item.id)"
                    >다운로드</S.DownloadButton
                  >
                </S.ButtonWrap>
              </S.InfoWrap>
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

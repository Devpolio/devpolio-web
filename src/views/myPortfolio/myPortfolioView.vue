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
import fileRepository from "@/repository/file/file.repository";

const router = useRouter();
const myPortfolioList = ref<PortfolioListResponse[]>([]);

const handleClickLike = (id: number, isLiked: boolean) => {
  try {
    if (!isLiked) {
      portfolioRepository.postPortfolioLike(id);
    } else {
      portfolioRepository.deletePortfolioLike(id);
    }

    // 로컬에서 임시로 갱신
    myPortfolioList.value = myPortfolioList.value.map((item) =>
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
      myPortfolioList.value = myPortfolioList.value.filter(
        (item) => item.id !== id
      );
      showToast("success", "포트폴리오가 삭제되었습니다.");
    });
  } catch (error) {
    showToast("error", "포트폴리오 삭제 중 오류가 발생했습니다.");
  }
};

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
            <PortfolioCard
              :portfolioList="myPortfolioList"
              @handleLikeClick="handleClickLike"
              @handlePreviewClick="handleClickPreview"
              @handleDownloadClick="handleClickDownload"
              @handleDeleteClick="handleClickDelete" />
          </S.List>
        </S.ListWrap>
      </S.Main>
    </S.Wrap>
  </S.Container>
</template>

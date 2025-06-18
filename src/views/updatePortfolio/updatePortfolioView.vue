<script setup lang="ts">
import * as S from "./style";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { UpdatePortfolioParam } from "@/repository/portfolio/portfolio.param";
import { showToast } from "@/libs/toast/swal";
import portfolioRepository from "@/repository/portfolio/portfolio.repository";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user/user.store";

const { user } = storeToRefs(useUserStore());
const route = useRoute();
const router = useRouter();
const path = Number(route.path.split("update-portfolio/")[1]);
const isOpen = ref(false);
const categoryData = ref(CATEGORY_ITEMS);
const portfolioData = ref<UpdatePortfolioParam>({
  title: "",
  author: "",
  category: "",
  isPublic: false,
});

const selectCategory = computed(() => {
  const selectedItem = categoryData.value.find((item) => item.isSelect);
  return selectedItem ? selectedItem.name : undefined;
});

const handleClickCategory = (name: string) => {
  portfolioData.value.category = name;
  categoryData.value = categoryData.value.map((item) => ({
    ...item,
    isSelect: item.name === name,
  }));
};

const handleClickUpdate = () => {
  if (!portfolioData.value.title || !portfolioData.value.author) {
    showToast("error", "제목, 작성자를 모두 입력해주세요.");
    return;
  }

  try {
    portfolioRepository.patchPortfolio(path, portfolioData.value).then(() => {
      showToast("success", "포트폴리오가 수정되었습니다.");
      router.push("/my-portfolio");
    });
  } catch {
    showToast("error", "포트폴리오 수정에 실패했습니다.");
  }
};

onMounted(() => {
  portfolioRepository.getPortfolio(path).then((data) => {
    portfolioData.value = {
      title: data.title,
      author: data.author,
      category: data.category,
      isPublic: data.public,
    };
    isOpen.value = data.public;
    handleClickCategory(data.category);
  });
});
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Box>
        <S.Title>포트폴리오 생성</S.Title>
        <S.Form>
          <S.TitleAuthorInputWrap>
            <S.InputWrap>
              <S.InputTitle>제목</S.InputTitle>
              <S.Input
                v-model="portfolioData.title"
                placeholder="제목을 입력해주세요"></S.Input>
            </S.InputWrap>
            <S.InputWrap>
              <S.InputTitle>작성자</S.InputTitle>
              <S.Input
                disabled
                :value="user.name"
                v-model="portfolioData.author"
                placeholder="작성자를 입력해주세요"></S.Input>
            </S.InputWrap>
          </S.TitleAuthorInputWrap>
          <S.VisibilityToggleWrap>
            <S.VisibilityToggleTitle>공개 여부</S.VisibilityToggleTitle>
            <S.VisibilityToggle :isOpen="isOpen">
              <S.VisibilityToggleText>{{
                isOpen ? "공개" : "비공개"
              }}</S.VisibilityToggleText>
              <S.Toggle
                :isOpen="isOpen"
                @click="
                  isOpen = !isOpen;
                  portfolioData.isPublic = !portfolioData.isPublic;
                ">
                <S.ToggleCircle :isOpen="isOpen" />
              </S.Toggle>
            </S.VisibilityToggle>
          </S.VisibilityToggleWrap>
          <S.CategoryWrap>
            <S.SelectCategory v-if="isOpen"
              >선택한 카테고리:<span>{{ selectCategory }}</span>
            </S.SelectCategory>
            <Category
              v-if="isOpen"
              :data="categoryData"
              @handleClickCategory="handleClickCategory" />
          </S.CategoryWrap>
        </S.Form>
        <S.ButtonWrap>
          <S.Button @click="handleClickUpdate">수정하기</S.Button>
        </S.ButtonWrap>
      </S.Box>
    </S.Wrap>
  </S.Container>
</template>

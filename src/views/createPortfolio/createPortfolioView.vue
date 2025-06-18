<script setup lang="ts">
import * as S from "./style";
import Upload from "@/assets/img/common/upload.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import { computed, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { PortfolioParam } from "@/repository/portfolio/portfolio.param";
import { showToast } from "@/libs/toast/swal";
import portfolioRepository from "@/repository/portfolio/portfolio.repository";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user/user.store";

const { user } = storeToRefs(useUserStore());
const router = useRouter();
const isOpen = ref(false);
const fileInput: Ref<HTMLInputElement | null> = ref(null);
const fileNames = ref<string[]>([]);
const fileUrls = ref<string[]>([]);
const categoryData = ref(CATEGORY_ITEMS);
const portfolioData = ref<PortfolioParam>({
  title: "",
  author: user.value.name || "",
  category: "",
  isPublic: false,
  password: "",
  files: [],
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

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;

  if (files && files.length > 0) {
    fileNames.value = Array.from(files).map((file) => file.name);
    fileUrls.value = Array.from(files).map((file) => URL.createObjectURL(file));
  }
};

const handleClickCreate = () => {
  portfolioData.value.author = user.value.name;

  if (!portfolioData.value.title || !portfolioData.value.author) {
    showToast("error", "제목, 작성자를 모두 입력해주세요.");
    return;
  }

  if (fileUrls.value.length === 0) {
    showToast("error", "포트폴리오 파일을 업로드해주세요.");
    return;
  }

  const files =
    fileInput.value && fileInput.value.files
      ? Array.from(fileInput.value.files)
      : [];
  portfolioData.value.files = files;

  const formData = new FormData();
  formData.append("title", portfolioData.value.title);
  formData.append("author", portfolioData.value.author);
  formData.append("category", portfolioData.value.category);
  formData.append("isPublic", String(portfolioData.value.isPublic));
  formData.append("password", portfolioData.value.password);

  files.forEach((file) => {
    formData.append("files", file);
  });

  portfolioRepository
    .postPortfolio(formData)
    .then(() => {
      showToast("success", "포트폴리오가 생성되었습니다.");
      router.push("/my-portfolio");
    })
    .catch(() => {
      showToast("error", "포트폴리오 생성 중 오류가 발생했습니다.");
    });
};

onMounted(() => {
  categoryData.value = categoryData.value.map((item) => ({
    ...item,
    isSelect: item.name === "전체",
  }));
  portfolioData.value.category = "전체";
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
          <S.PasswordInputWrap>
            <S.PasswordInputTextWrap>
              <S.PasswordInputTitle>비밀번호</S.PasswordInputTitle>
              <S.PasswordInputDescription
                >포트폴리오 삭제 시 필요한
                비밀번호입니다.</S.PasswordInputDescription
              >
            </S.PasswordInputTextWrap>
            <S.PasswordInput
              type="password"
              v-model="portfolioData.password"
              placeholder="비밀번호를 입력해주세요"></S.PasswordInput>
          </S.PasswordInputWrap>
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
          <S.File @click="triggerFileInput">
            <input
              type="file"
              ref="fileInput"
              multiple
              accept=".pdf"
              @change="handleChange"
              style="display: none" />
            <Upload />
            <S.Text>
              <template v-if="fileNames.length > 0">
                <div v-for="(name, index) in fileNames" :key="index">
                  {{ name }}
                </div>
              </template>
              <template v-else> 포트폴리오 업로드 </template>
            </S.Text>
            <S.Comment
              >※ 포트폴리오는 .pdf 파일 형식으로 업로드해주세요!</S.Comment
            >
          </S.File>
          <S.PreviewWrap v-if="fileUrls.length > 0">
            <S.PreviewTitle>미리보기</S.PreviewTitle>
            <div v-for="(url, index) in fileUrls" :key="index">
              <S.Preview :src="url" />
            </div>
          </S.PreviewWrap>
        </S.Form>
        <S.ButtonWrap>
          <S.Button @click="handleClickCreate">생성하기</S.Button>
        </S.ButtonWrap>
      </S.Box>
    </S.Wrap>
  </S.Container>
</template>

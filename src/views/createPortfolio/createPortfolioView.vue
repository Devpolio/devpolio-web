<script setup lang="ts">
import * as S from "./style";
import Upload from "@/assets/img/common/upload.vue";
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import Category from "@/components/common/category/category.vue";
import { CATEGORY_ITEMS } from "@/constants/category.constant";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const fileName = ref<string | null>(null);
const fileUrl = ref<string | null>(null);
const fileInput: Ref<HTMLInputElement | null> = ref(null);
const categoryData = ref(CATEGORY_ITEMS);

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

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files && target.files[0];
  if (file) {
    fileName.value = file.name;
    fileUrl.value = URL.createObjectURL(file);
  }
};
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
              <S.Input placeholder="제목을 입력해주세요"></S.Input>
            </S.InputWrap>
            <S.InputWrap>
              <S.InputTitle>작성자</S.InputTitle>
              <S.Input placeholder="작성자를 입력해주세요"
                ><!-- user data 넣을 예정 --></S.Input
              >
            </S.InputWrap>
          </S.TitleAuthorInputWrap>
          <S.VisibilityToggleWrap>
            <S.VisibilityToggleTitle>공개 여부</S.VisibilityToggleTitle>
            <S.VisibilityToggle :isOpen="isOpen">
              <S.VisibilityToggleText>{{
                isOpen ? "공개" : "비공개"
              }}</S.VisibilityToggleText>
              <S.Toggle :isOpen="isOpen" @click="isOpen = !isOpen">
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
              @change="handleChange"
              style="display: none" />
            <Upload />
            <S.Text>{{ fileName ? fileName : "포트폴리오 업로드" }}</S.Text>
            <S.Comment>※ 포트폴리오는 .pdf 파일 형식으로 업로드해주세요!</S.Comment>
          </S.File>
          <S.PreviewWrap v-if="fileUrl">
            <S.PreviewTitle>미리보기</S.PreviewTitle>
            <S.Preview :src="fileUrl" />
          </S.PreviewWrap>
        </S.Form>
        <S.ButtonWrap>
          <S.Button @click="router.push('my-portfolio')">생성하기</S.Button>
        </S.ButtonWrap>
      </S.Box>
    </S.Wrap>
  </S.Container>
</template>

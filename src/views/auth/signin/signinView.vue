<script lang="ts" setup>
import { useRouter } from "vue-router";
import * as S from "./style";
import { ref } from "vue";
import { SigninParam } from "@/repository/auth/auth.param";
import authRepository from "@/repository/auth/auth.repository";
import token from "@/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant";
import { showToast } from "@/libs/toast/swal";

const router = useRouter();
const signinValue = ref<SigninParam>({
  email: "",
  password: "",
});

const handleClickSignin = () => {
  if (!signinValue.value.email || !signinValue.value.password) {
    showToast("error", "로그인 정보를 모두 입력해주세요");
    return;
  }

  try {
    authRepository.signin(signinValue.value).then((res) => {
      token.setToken(ACCESS_TOKEN_KEY, res.accessToken);
      token.setToken(REFRESH_TOKEN_KEY, res.refreshToken);
      showToast("success", "로그인을 성공했습니다");
      router.push("/");
    });
  } catch {
    showToast("error", "로그인을 실패했습니다");
  }
};
</script>

<template>
  <S.Container>
    <S.Wrap>
      <S.Title>로그인</S.Title>
      <S.Info>
        <S.InputWrap>
          <S.InputBox>
            <S.InputTitle>이메일</S.InputTitle>
            <S.Input
              v-model="signinValue.email"
              placeholder="이메일을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.Input
              type="password"
              v-model="signinValue.password"
              placeholder="비밀번호를 입력해주세요"
              @keydown.enter="handleClickSignin"></S.Input>
          </S.InputBox>
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button @click="handleClickSignin">로그인</S.Button>
          <S.TextWrap>
            <S.Text>아직 계정이 없다면?</S.Text>
            <S.Link @click="router.push('/signup')">회원가입</S.Link>
          </S.TextWrap>
        </S.ButtonWrap>
      </S.Info>
    </S.Wrap>
  </S.Container>
</template>

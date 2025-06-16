<script lang="ts" setup>
import { useRouter } from "vue-router";
import * as S from "./style";
import { ref } from "vue";
import { SigninParam } from "@/repository/auth/auth.param";
import authRepository from "@/repository/auth/auth.repository";

const router = useRouter();
const signinValue = ref<SigninParam>({
  email: "",
  password: "",
});

const handleClickSignin = () => {
  if (!signinValue.value.email || !signinValue.value.password) {
    alert("로그인 정보를 모두 입력해주세요");
    return;
  }

  try {
    authRepository.signin(signinValue.value).then((res) => console.log(res));
    router.push("/");
  } catch {
    alert("로그인을 실패했습니다");
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

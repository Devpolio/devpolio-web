<script lang="ts" setup>
import { ref } from "vue";
import * as S from "./style";
import { SignupParam } from "@/repository/auth/auth.param";
import authRepository from "@/repository/auth/auth.repository";
import { useRouter } from "vue-router";

const router = useRouter();
const signupValue = ref<SignupParam>({
  name: "",
  email: "",
  password: "",
});

const handleClickSignup = () => {
  if (
    !signupValue.value.name ||
    !signupValue.value.email ||
    !signupValue.value.password
  ) {
    alert("회원가입 정보를 모두 입력해주세요");
    return;
  }

  try {
    authRepository
      .signup(signupValue.value)
      .then((res) => router.push("/signin"));
  } catch {
    alert("회원가입을 실패했습니다");
  }
};
</script>

<template>
  <S.Container>
    <S.Wrap>
      <S.Title>회원가입</S.Title>
      <S.Info>
        <S.InputWrap>
          <S.InputBox>
            <S.InputTitle>닉네임</S.InputTitle>
            <S.Input
              v-model="signupValue.name"
              placeholder="닉네임을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>이메일</S.InputTitle>
            <S.Input
              v-model="signupValue.email"
              placeholder="이메일을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.Input
              type="password"
              v-model="signupValue.password"
              placeholder="비밀번호를 입력해주세요"
              @keydown.enter="handleClickSignup"></S.Input>
          </S.InputBox>
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button @click="handleClickSignup">회원가입</S.Button>
          <S.TextWrap>
            <S.Text>이미 계정이 있다면?</S.Text>
            <S.Link @click="router.push('/signin')">로그인</S.Link>
          </S.TextWrap>
        </S.ButtonWrap>
      </S.Info>
    </S.Wrap>
  </S.Container>
</template>
